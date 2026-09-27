export const name="lucid_3-mars";
export const id="dl_69590391d9514ebeaed0";
export const url=new URL("../icons/lucid_3-mars.svg?v=15aea254e5fa2eeb26a75606e2060187d8eb019f3685e4cdb0a00c81432a2e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
