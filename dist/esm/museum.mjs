export const name="museum";
export const id="dl_155eb599aefda57272b3";
export const url=new URL("../icons/museum.svg?v=f3b685ec2c7d489ae4bb5e4c623b4fc15c03aa00c01dbb807a535a644155d20e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
