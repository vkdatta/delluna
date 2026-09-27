export const name="airplane-tilt-duotone";
export const id="dl_c26965edab9d4d49925b";
export const url=new URL("../icons/airplane-tilt-duotone.svg?v=091cd4224461486da2330a8a3950e6e0e272ea48f939df73c6edfc0737386a87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
