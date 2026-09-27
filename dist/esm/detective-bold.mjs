export const name="detective-bold";
export const id="dl_3a83ec43bc3f44529803";
export const url=new URL("../icons/detective-bold.svg?v=add10d3a6d533404a06498e9b1768eb90b4a52fa1f6de9714aa3f245a95d5896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
