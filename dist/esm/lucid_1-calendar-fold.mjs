export const name="lucid_1-calendar-fold";
export const id="dl_e6785d505ec147e7adb8";
export const url=new URL("../icons/lucid_1-calendar-fold.svg?v=13f138a762cb317b5bee171345f5a82b55348c5dc33eb3a1e97a3c22bbb5b633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
