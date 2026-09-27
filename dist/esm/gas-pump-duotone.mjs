export const name="gas-pump-duotone";
export const id="dl_4248b7aadfdf445ca80d";
export const url=new URL("../icons/gas-pump-duotone.svg?v=ee30542584086fcb916825b8a8eb120f45394dd577f7f7a74720df785d0d49b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
