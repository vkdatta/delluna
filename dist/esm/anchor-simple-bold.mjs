export const name="anchor-simple-bold";
export const id="dl_236d132ac17944bdb12e";
export const url=new URL("../icons/anchor-simple-bold.svg?v=2952659f1fbb64f114e3383f2a6f2ab726486524d434360ba4145025b53ecf85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
