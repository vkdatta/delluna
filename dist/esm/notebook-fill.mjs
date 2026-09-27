export const name="notebook-fill";
export const id="dl_a5cde38682d1474e8fbf";
export const url=new URL("../icons/notebook-fill.svg?v=2bef2e7ef0a3d950918e48d5b446b1c7dd42e755bb80f1e602887b6203815f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
