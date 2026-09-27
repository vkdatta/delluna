export const name="hourglass_arrow_up-fill";
export const id="dl_82d2c77084bbf6f2e6fa";
export const url=new URL("../icons/hourglass_arrow_up-fill.svg?v=648973ef79ac57b8c6fe7c0c0b74cca9f4383a67257631542d7166b42256482a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
