export const name="globe_2_question-fill";
export const id="dl_e0f6e3a3bb187c848e40";
export const url=new URL("../icons/globe_2_question-fill.svg?v=3c48308cd28dfdad67b550260f5aaf12ec54c7a9792411fe288e23d97b6131e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
