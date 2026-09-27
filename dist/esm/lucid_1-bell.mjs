export const name="lucid_1-bell";
export const id="dl_521a72aff5d74cc5b20d";
export const url=new URL("../icons/lucid_1-bell.svg?v=9159592496a2de70b1691437854ea834b8dfa8a217ad7cf7f4b49c80dfd15662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
