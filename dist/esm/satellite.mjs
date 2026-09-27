export const name="satellite";
export const id="dl_80deb9ba2eacf07c55e2";
export const url=new URL("../icons/satellite.svg?v=f7beb97b763787908c91ee530ed8649f9c82550367273f0f86b608cb404f5b41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
