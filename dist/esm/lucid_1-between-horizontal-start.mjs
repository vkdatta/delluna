export const name="lucid_1-between-horizontal-start";
export const id="dl_b9721fa3725e45cb96ca";
export const url=new URL("../icons/lucid_1-between-horizontal-start.svg?v=b96f65fd2fe691fcabf2807115ee9dc63545f4dcfc5914ae27f0fec85e3c10f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
