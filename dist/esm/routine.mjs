export const name="routine";
export const id="dl_2fcfe6166c2c9f757e42";
export const url=new URL("../icons/routine.svg?v=755c835b7c6c27d24fc4f898491f2701dbcd9b2d023b9793a6e2a0a02d4b3678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
