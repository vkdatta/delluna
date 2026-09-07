export const name="warning-thin";
export const id="dl_7dd05c27a30d4b6386b6";
export const url=new URL("../icons/W/warning-thin.svg?v=23d9292216852effd08537032d2ff230d7c13fb32db2c0ec993eae74ac1e7b84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
