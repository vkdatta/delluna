export const name="trolley-duotone";
export const id="dl_bb05288a60ff4ca881c5";
export const url=new URL("../icons/T/trolley-duotone.svg?v=4d49d419e190994d86a1885d15d2690c6bebd81373447b3d3e40c91a07a6a3ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
