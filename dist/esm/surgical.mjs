export const name="surgical";
export const id="dl_3ad10f296e8642049f30";
export const url=new URL("../icons/S/surgical.svg?v=9724d107e438f87caacae752609fb24aef9e6b6b8b4b7766e263abc1381e7e15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
