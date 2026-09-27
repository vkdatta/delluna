export const name="network-fill";
export const id="dl_db99f9d0e17c4125893d";
export const url=new URL("../icons/network-fill.svg?v=d59032db7df07480cc433ec191a84094d7726a6a0926fe2cabb90031d18d1e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
