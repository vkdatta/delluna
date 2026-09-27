export const name="lucid_1-columns-3-cog";
export const id="dl_5b59819466034bfa8b38";
export const url=new URL("../icons/lucid_1-columns-3-cog.svg?v=7dcf35487a2f01dbbbd075503ab62cb76e8ec660aa86f1a7e644229179fac5b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
