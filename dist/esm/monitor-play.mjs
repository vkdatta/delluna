export const name="monitor-play";
export const id="dl_004c0205f82c4c1895f9";
export const url=new URL("../icons/monitor-play.svg?v=21db3afde12fc11adf5d156a6031eaebd361ff4b5164b00eb7f00c61cbdbea66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
