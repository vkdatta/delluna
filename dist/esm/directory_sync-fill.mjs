export const name="directory_sync-fill";
export const id="dl_ccfe95c5b0b9433093c2";
export const url=new URL("../icons/directory_sync-fill.svg?v=56bef8d41d4aec509ba1132aa0f882c56adcce255a60482cd048dba7ac370a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
