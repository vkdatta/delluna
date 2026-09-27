export const name="timer_3_select-fill";
export const id="dl_e8dec8de8248f746f124";
export const url=new URL("../icons/timer_3_select-fill.svg?v=69aac833dc37676a71b8a85fd07efbad984f3ad341d2328055f368e0bc711e79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
