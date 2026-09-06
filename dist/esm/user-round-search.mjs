export const name="user-round-search";
export const id="dl_f86cff24491345cdb87d";
export const url=new URL("../icons/user-round-search.svg?v=978b1e0776cae72a316f63c912b5d34ece8f18559751c0b5786da2b0490efbaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
