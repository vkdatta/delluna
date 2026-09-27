export const name="battery_unknown";
export const id="dl_838129d3ee40f46e9c82";
export const url=new URL("../icons/battery_unknown.svg?v=0a03bd6e35429d4f1bf799c587c444358e79dbf53c81d104218ea874f7d12ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
