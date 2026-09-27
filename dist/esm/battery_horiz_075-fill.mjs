export const name="battery_horiz_075-fill";
export const id="dl_ff7acc928cf521c83336";
export const url=new URL("../icons/battery_horiz_075-fill.svg?v=f9900ab076c0c937692e6f17d30a2e98f5e4182acb7d75ad856125d3a3d58b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
