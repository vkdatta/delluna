export const name="app-window-bold";
export const id="dl_d88aa8bc3fed46e89bc1";
export const url=new URL("../icons/app-window-bold.svg?v=25b3b6c8b68903c0db3b0690a35a05015f64e744b4ab898486eb602329f2507e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
