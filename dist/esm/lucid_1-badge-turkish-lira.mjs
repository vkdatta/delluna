export const name="lucid_1-badge-turkish-lira";
export const id="dl_e5298cca1b5c42aa834e";
export const url=new URL("../icons/lucid_1-badge-turkish-lira.svg?v=01d480b31f2e673ec0302cb7b4cb754c0de26adb1c9ddb4414887ae07daf849b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
