export const name="50mp-fill";
export const id="dl_7ba91199d66a8d954219";
export const url=new URL("../icons/50mp-fill.svg?v=0a1e701c1c807f580b4fcc6e8bef3ec34c6f49bd91ee57f75537e087297fe1a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
