export const name="hematology";
export const id="dl_f861433982624dd998fc";
export const url=new URL("../icons/hematology.svg?v=8b45358896d8b5bd270e754a6c63c225b1bc7b3f08e78728fd230d33cb7151d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
