export const name="notepad";
export const id="dl_a2f83f76fb014596839c";
export const url=new URL("../../icons/N/notepad.svg?v=65f069445f9cbf08b9dbbcab5069512095d25c4b0a17113cf98ca9fdc380cf82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
