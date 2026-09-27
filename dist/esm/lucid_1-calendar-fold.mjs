export const name="lucid_1-calendar-fold";
export const id="dl_e6785d505ec147e7adb8";
export const url=new URL("../icons/lucid_1-calendar-fold.svg?v=8c66ff084ea066a83377383a41ecbf97900ac80aa549533159421102d6cda14c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
