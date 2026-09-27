export const name="battery-high-bold";
export const id="dl_cb8591dae2b64e609b2a";
export const url=new URL("../icons/battery-high-bold.svg?v=f8c0a6451b229d3920e96c7d078614c7da2a71bb10d186e663a8b3d8505a1b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
