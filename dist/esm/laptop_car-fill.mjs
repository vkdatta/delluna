export const name="laptop_car-fill";
export const id="dl_ea978ff9ec438e2bd139";
export const url=new URL("../icons/laptop_car-fill.svg?v=2344b808841f61d9a8eae1c0177a9ae895f1f9251458be5234bf49b9de6d1cc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
