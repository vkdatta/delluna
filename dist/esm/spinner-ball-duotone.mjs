export const name="spinner-ball-duotone";
export const id="dl_de655844e355592d265c";
export const url=new URL("../icons/spinner-ball-duotone.svg?v=42df2d85fc5d03da27d13a2e3a73ba3c834a5894afc21caa3e7f9575137a9c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
