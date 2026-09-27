export const name="oncology-fill";
export const id="dl_13121c655258deae7d02";
export const url=new URL("../icons/oncology-fill.svg?v=00a97fa5dbd4c8f959f03dea364a84bca8d5ffca66c5b2ca46382c3c5c10cc26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
