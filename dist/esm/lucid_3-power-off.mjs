export const name="lucid_3-power-off";
export const id="dl_6ef97cd918904f358bca";
export const url=new URL("../icons/lucid_3-power-off.svg?v=3249e4527f373d68a2d61a767370cd6cdee9b18a46b466b0f00c5e7017e68cb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
