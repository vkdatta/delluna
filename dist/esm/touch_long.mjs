export const name="touch_long";
export const id="dl_c1de48e32ecc4db59c34";
export const url=new URL("../icons/T/touch_long.svg?v=ffccdfc6481eb73caa9911c18f24bb8c5ed1d536f0f8246a88b6d9d4013935d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
