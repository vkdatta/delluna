export const name="cassette-tape-fill";
export const id="dl_ec4e1b2c01174a4a96e0";
export const url=new URL("../icons/cassette-tape-fill.svg?v=83ec9ce30814ec374af149785804410a27faa87b195564a12d2f083779be4b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
