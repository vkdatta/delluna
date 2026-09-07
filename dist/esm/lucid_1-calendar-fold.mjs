export const name="lucid_1-calendar-fold";
export const id="dl_e6785d505ec147e7adb8";
export const url=new URL("../icons/lucid_1-calendar-fold.svg?v=651afd0005dcfcf9ff615d51306959d1e73232bf5f9ebc6c13046b54affedd35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
