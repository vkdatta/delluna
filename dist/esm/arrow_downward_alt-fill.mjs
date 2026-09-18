export const name="arrow_downward_alt-fill";
export const id="dl_1de48e0b139d4b74bc28";
export const url=new URL("../icons/arrow_downward_alt-fill.svg?v=4885d77c9e488a83321f76ea4b1419ca719d932f3aa123ea1def9f51d4129fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
