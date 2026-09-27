export const name="battery-vertical-high";
export const id="dl_6d61066b8d534f1e9955";
export const url=new URL("../icons/battery-vertical-high.svg?v=c5df50d80d7d531bcfbd7019ac0076745a19a269170eab72ca18e20ec09da82d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
