export const name="file_present";
export const id="dl_b696b4d977f28dfbbf1d";
export const url=new URL("../icons/file_present.svg?v=cf737bf15ffa18b8d3d13f21c7e552070355a1cd5ca00355ef9e68d6a35201d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
