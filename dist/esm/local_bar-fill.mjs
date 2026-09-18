export const name="local_bar-fill";
export const id="dl_c58471b9b9ea4c6da9c7";
export const url=new URL("../icons/local_bar-fill.svg?v=440e0373bc315ec67ef431872a0857c2593c61ed287991d3d0440acdb2d9be33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
