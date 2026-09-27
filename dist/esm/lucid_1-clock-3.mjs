export const name="lucid_1-clock-3";
export const id="dl_12e53706dba0446c9940";
export const url=new URL("../icons/lucid_1-clock-3.svg?v=feb930b46afde407a615a05cff3ffedc60c6a5cc0c4b3aa3cd70b796c2682fbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
