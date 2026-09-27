export const name="wash-fill";
export const id="dl_b5ba4b9b90195464c6fa";
export const url=new URL("../icons/wash-fill.svg?v=a3139b43bb9ee135e98988d6b4b83c1e0f04fd44c58fa393f3973bb7dbe510f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
