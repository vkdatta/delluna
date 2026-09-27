export const name="user-round-search";
export const id="dl_f86cff24491345cdb87d";
export const url=new URL("../icons/user-round-search.svg?v=96f5701add4a0610cfe9524dbf41c348c8a64c8a4b23027a9c37746d02d8b24e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
