'use server'
import 'server-only'
import { auth } from '@clerk/nextjs';

export async function getHello() {
    const { sessionClaims, getToken } = auth();
    const token = await getToken();

    var res;
    try {
        res = await fetch(`${process.env.BACKEND_URL}/api/hello`, {
            headers: { Authorization: `Bearer ${token}` },
            cache: 'no-store'
        });
    } catch (error) {
        console.error('Fetch Exception:', error);
    }

    var data: { text: string };
    if (res && res.ok) {
        data = await res.json();
    } else {
        data = { text: 'Failed to load' };
    }

    return data.text;
}
