export const name="lucid_1-align-end-horizontal";
export const id="dl_3acbbc50e2cc4a2789bb";
export const url=new URL("../icons/lucid_1-align-end-horizontal.svg?v=f2dd74486ea94767349a580aaf4a932123ca8c071c9efda73db4c1a980d64c51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
