export const name="view_in_ar_off";
export const id="dl_0a8fb074b0c1f74f9d9d";
export const url=new URL("../icons/view_in_ar_off.svg?v=556bbcad38e349e2023ef39d4d9cfb45a4ce6bd538cdcc80dbf71811ed5d5690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
