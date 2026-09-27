export const name="dishwasher";
export const id="dl_a18d338f06c8f8e931c6";
export const url=new URL("../icons/dishwasher.svg?v=2b05a31c39711e63070040940c70bd1b9f4972924719fe3c0bfe50ba87ec59f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
