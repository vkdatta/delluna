export const name="open_in_new_off-fill";
export const id="dl_5f07f04aa6e84fe98f4e";
export const url=new URL("../icons/open_in_new_off-fill.svg?v=6fda5113773ccf4cf901b5568e80d81930b250391e9fec8bef34f254029cfdcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
