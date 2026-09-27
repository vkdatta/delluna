export const name="text_format-fill";
export const id="dl_a23fc0dd63b422962377";
export const url=new URL("../icons/text_format-fill.svg?v=e6c5ecec6ba3b274823aac0afb4145b8cbc667946ee887975dfb79e0d55b9b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
