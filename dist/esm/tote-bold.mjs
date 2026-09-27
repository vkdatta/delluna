export const name="tote-bold";
export const id="dl_61e3ca71e3968d04a611";
export const url=new URL("../icons/tote-bold.svg?v=9667fc6a507a2ffd23219467794a54ee1603ce14011cfbc31cc5d42b191133b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
