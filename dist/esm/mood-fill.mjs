export const name="mood-fill";
export const id="dl_108e3459e213a000d1c1";
export const url=new URL("../icons/mood-fill.svg?v=4a5ef2b64a4a2ac4646b6427b79714f04f7cc900d7b7b0a1053ebea0753d0220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
