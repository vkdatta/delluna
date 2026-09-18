export const name="timer_10_select";
export const id="dl_bb20eb70894742968b4f";
export const url=new URL("../icons/T/timer_10_select.svg?v=bf6cc2543dc2343eca729b7932420a312ca2be8df218fcae3bfe717e762981b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
