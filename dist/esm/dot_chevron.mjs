export const name="dot_chevron";
export const id="dl_2303184041d24c3aae14";
export const url=new URL("../icons/dot_chevron.svg?v=6e93dc2624270404b90a38bf406b28a00aea125605d379f9bbbe56852e88c1e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
