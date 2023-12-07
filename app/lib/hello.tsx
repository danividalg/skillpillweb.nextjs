'use server'
import 'server-only'

export async function getHello() {
    var res;
    try {
        res = await fetch(`${process.env.BACKEND_URL}/api/hello`, {
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
