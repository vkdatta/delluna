export const name="bedtime";
export const id="dl_6f8fb4268d964b6d9ee1";
export const url=new URL("../icons/bedtime.svg?v=7a0ec8f11deda0c078d876c724106c220b6fa0bb2b9833dcb0d27eebf6eb78e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
