'use server';

import { revalidatePath } from "next/cache";

const myKV = process.env.MY_KV;
const secretKey = process.env.SECRET_KEY ?? 'keyy';

export async function setValueAction() {
    const now = new Date();
    await myKV.put(secretKey, now.toISOString());
    revalidatePath('/');
}

export async function clearValueAction() {
    await myKV.delete(secretKey);
    revalidatePath('/');
}