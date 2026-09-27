export const name="placeholder-fill";
export const id="dl_a1cfe2f71b4d48309253";
export const url=new URL("../icons/placeholder-fill.svg?v=09628ab914490ce309526074d2a076e3a6f46ad8e0c90abf9d4b97680decb0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
