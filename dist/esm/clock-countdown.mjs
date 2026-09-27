export const name="clock-countdown";
export const id="dl_a7d9cfa6f07b43db96f6";
export const url=new URL("../icons/clock-countdown.svg?v=977fbb6e1e3788ad2ceba71bc2c534a71a9a3895709ab913cdeedbaafe483965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
