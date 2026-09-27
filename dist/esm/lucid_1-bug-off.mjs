export const name="lucid_1-bug-off";
export const id="dl_4ff188a8227e45f496a1";
export const url=new URL("../icons/lucid_1-bug-off.svg?v=c5f37a5ef1f3319841477883920a09227965b713de76ce52522fb40c428c4a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
