export const name="buttons_alt-fill";
export const id="dl_8ce507f520bfad3474b9";
export const url=new URL("../icons/buttons_alt-fill.svg?v=1009fa8f342e1fae922140e0d8597267927ac2047b1f6ade97ae5c26bbc9cc86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
