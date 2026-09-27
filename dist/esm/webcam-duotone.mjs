export const name="webcam-duotone";
export const id="dl_2166d84de811ef05477c";
export const url=new URL("../icons/webcam-duotone.svg?v=a6651b2ac1847f8db4c2d60dd43d3a2f06a58bf643c36161f482360207a13f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
