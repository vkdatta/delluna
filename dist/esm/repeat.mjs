export const name="repeat";
export const id="dl_f6c727b643144080b6ba";
export const url=new URL("../icons/repeat.svg?v=c4cd4c555a8918b2c2b957065085f16ec93dae0b267837de33162aaad281ebf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
