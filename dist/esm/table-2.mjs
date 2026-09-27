export const name="table-2";
export const id="dl_16f281233c6d4d81bfd6";
export const url=new URL("../icons/table-2.svg?v=b25142c3140aa41913bb506ff802971862159681cb7e7f4862ae1e44af1bcd09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
