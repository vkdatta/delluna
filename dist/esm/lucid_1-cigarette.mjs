export const name="lucid_1-cigarette";
export const id="dl_db1c02aa63e64e85bb62";
export const url=new URL("../icons/lucid_1-cigarette.svg?v=43de0f151edc730a11b05873794c3c68480e3ebb8250d09f3fae7ffeca2edaf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
