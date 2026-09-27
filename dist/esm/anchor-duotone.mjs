export const name="anchor-duotone";
export const id="dl_b872265cea524382888c";
export const url=new URL("../icons/anchor-duotone.svg?v=5e8f33e40c7ab4b7ddf18645d4eebc3d5b3aa8fca973bb9f2895b6c34cde0f47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
