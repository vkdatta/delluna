export const name="2k-fill";
export const id="dl_e733cd7bf1b8cd13cda1";
export const url=new URL("../icons/2k-fill.svg?v=5f4dbaa51cfa1475f60fadf54767be44fdd7365b57b13ac97566a3878f36891b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
