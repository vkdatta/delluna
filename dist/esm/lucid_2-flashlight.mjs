export const name="lucid_2-flashlight";
export const id="dl_bda7add5ad344c37b506";
export const url=new URL("../icons/lucid_2-flashlight.svg?v=47eedc15564e5b8ac47f202220ce4d85e0f1dd9bf35217541924cb50c966524c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
