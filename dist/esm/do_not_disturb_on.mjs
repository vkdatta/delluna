export const name="do_not_disturb_on";
export const id="dl_e96702076154f198f3eb";
export const url=new URL("../icons/do_not_disturb_on.svg?v=0f5a8cffa630d97ce6d2a7976502347368b11fa6a2c1568007edbf062e364a1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
