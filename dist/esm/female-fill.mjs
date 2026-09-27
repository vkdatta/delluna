export const name="female-fill";
export const id="dl_06d830ebb2b89a3420ea";
export const url=new URL("../icons/female-fill.svg?v=21569887aa4d3f0c08faf4e0fc4c958a8eff7484f7112c7c040fe751c6d8dd81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
