export const name="cell-signal-x-fill";
export const id="dl_2a624254ec794b5c83fb";
export const url=new URL("../icons/cell-signal-x-fill.svg?v=87492088b42d5c67e728de2ad4c3c28146d97fdad83556d4e3a4240dd006ea26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
