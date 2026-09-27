export const name="lucid_1-alarm-clock-off";
export const id="dl_cdace504fbb4401fafbd";
export const url=new URL("../icons/lucid_1-alarm-clock-off.svg?v=c849a818e4611b8d02782c1fee7a3bb79094ded3cad687f690e33f7ccf8bc18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
