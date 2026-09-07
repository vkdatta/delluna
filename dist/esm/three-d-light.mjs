export const name="three-d-light";
export const id="dl_87fb32d3cfd24d089749";
export const url=new URL("../icons/T/three-d-light.svg?v=c2c5110a12ed4d8dc0509b51027c3f700c8e7b6a5f241d3d73863ee174ec66e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
