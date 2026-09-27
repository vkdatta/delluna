export const name="humidity_low-fill";
export const id="dl_41a7a93bfd6e0b011e0b";
export const url=new URL("../icons/humidity_low-fill.svg?v=bf4a75164403fa0db5d1aa92f3b725277efb42e5826717a536accf1c66601ffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
