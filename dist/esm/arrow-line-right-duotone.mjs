export const name="arrow-line-right-duotone";
export const id="dl_6fd1fea61c4b4a8190b3";
export const url=new URL("../icons/arrow-line-right-duotone.svg?v=97d92aa563e5edd3b11a670ae5a5edda503cb04f188695dcd70d44e3e124a87b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
