export const name="umbrella-simple";
export const id="dl_202ba3a157d8f06e56d6";
export const url=new URL("../icons/umbrella-simple.svg?v=6fa570a949b210ea4e2326f4e3c71b34c9e2f14989176c82d70ae1c03bb49f9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
