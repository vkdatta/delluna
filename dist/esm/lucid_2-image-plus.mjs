export const name="lucid_2-image-plus";
export const id="dl_0e6588bc8fa34c8da0e4";
export const url=new URL("../icons/lucid_2-image-plus.svg?v=6ae3d63c18e78c6b968a124ed597ee61621ad45536ebd0ef56a9381ea5f598bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
