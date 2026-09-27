export const name="cassette-tape-fill";
export const id="dl_ec4e1b2c01174a4a96e0";
export const url=new URL("../icons/cassette-tape-fill.svg?v=39a665374e7479843585c37212c13f8df7e50d2eda7c4b173ae78e5bbf1213fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
