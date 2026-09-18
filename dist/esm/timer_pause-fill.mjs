export const name="timer_pause-fill";
export const id="dl_70f9a86748a047de8006";
export const url=new URL("../icons/T/timer_pause-fill.svg?v=308cabb025239656aaddb3652524510d6f07b525e92e930b72b719246c40e5c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
