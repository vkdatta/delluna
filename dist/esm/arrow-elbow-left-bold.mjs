export const name="arrow-elbow-left-bold";
export const id="dl_7067c002a6cc4b80bf7b";
export const url=new URL("../icons/arrow-elbow-left-bold.svg?v=e9d59baddf9409f815923fedb7496407106d539785211f12b766d8327ec3e9c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
