export const name="time_auto-fill";
export const id="dl_b73cec8c10221586404c";
export const url=new URL("../icons/time_auto-fill.svg?v=23b77a920078a9612afd73b5d9240b221e69a83dee908665390b6b1713bde535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
