export const name="suitcase-light";
export const id="dl_6b49f9b3ecf54eb7b052";
export const url=new URL("../icons/S/suitcase-light.svg?v=a8ebe5430db796e2aa090271809248ad0f7fdcd52f0739531f1322c003c3607f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
