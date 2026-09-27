export const name="view_comfy";
export const id="dl_ee54bd810a2b461b6a8b";
export const url=new URL("../icons/view_comfy.svg?v=66d294ef8e0cd05505d88dd321b802c30658200ac4e40508bfb900e928a87c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
