export const name="mobile_dock";
export const id="dl_5320dc4b21acb266f8a0";
export const url=new URL("../icons/mobile_dock.svg?v=c6124cd3727641a4b2ce5635cdec6488d3053e59abe5c6c5460fabeff7c29235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
