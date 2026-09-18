export const name="priority-fill";
export const id="dl_f9f0ed1c810744b38e49";
export const url=new URL("../icons/P/priority-fill.svg?v=b9f65bdbfc83dfcf4a10e40e2048ffb5837906b97520e28e8ba9bebc89a6ee39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
