export const name="popsicle";
export const id="dl_f0284a2ef00647358da1";
export const url=new URL("../icons/popsicle.svg?v=da5224b3a13159da84a17ac35994e6809df2b3adf94de4a569a16056f2d22e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
