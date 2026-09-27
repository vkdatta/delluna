export const name="lucid_3-square-arrow-up";
export const id="dl_12855b01c5fc4af08446";
export const url=new URL("../icons/lucid_3-square-arrow-up.svg?v=422bef495ca91a1540a370995483e88bbc391fc631fcee69de7dcf2f25bd616a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
