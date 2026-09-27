export const name="van";
export const id="dl_0669eac682c7431599db";
export const url=new URL("../icons/van.svg?v=2a531a8fae231e65c391e569e8067a2e9aa3bf620c9985eaeecd171e58f8b235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
