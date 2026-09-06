export const name="bluetooth-slash";
export const id="dl_bb7dd3a055304678b81e";
export const url=new URL("../icons/bluetooth-slash.svg?v=e5cc59f62786e32ff79fbbc37ff922efea95dfe389714e8db6fe31a078d24580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
