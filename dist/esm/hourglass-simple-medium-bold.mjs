export const name="hourglass-simple-medium-bold";
export const id="dl_3d389fce6f5948fdbbbf";
export const url=new URL("../icons/hourglass-simple-medium-bold.svg?v=4956b1829fe1f515bf912a306a03758a844d0daceeba96385c4033ca3e06ad28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
