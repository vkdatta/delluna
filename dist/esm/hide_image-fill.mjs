export const name="hide_image-fill";
export const id="dl_164431f022dcd98602cc";
export const url=new URL("../icons/hide_image-fill.svg?v=caa8cd12501fd326514b1c7e0aec213e132129dcb7f19954be7845962ba5a3bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
