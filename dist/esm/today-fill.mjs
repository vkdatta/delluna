export const name="today-fill";
export const id="dl_15429cd4b85340caa89d";
export const url=new URL("../icons/today-fill.svg?v=f26996f7536ecf6160114de1d11f443860ce9b44f6b1314947f1541da68df9e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
