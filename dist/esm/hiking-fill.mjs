export const name="hiking-fill";
export const id="dl_4be6e6b28b02e13b3c27";
export const url=new URL("../icons/hiking-fill.svg?v=2772abebd229ce8830a1faf506d28c97432281e35e02adca95c65a0f476c8dbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
