export const name="transition_chop";
export const id="dl_c3ea93b1f88c196361ff";
export const url=new URL("../icons/transition_chop.svg?v=ee054e47bb4507f59a610b9264352a92df5d553689fefc2ae3ec8e80ee2b001b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
