export const name="counter_2-fill";
export const id="dl_e36f16cc5ed8581ab130";
export const url=new URL("../icons/counter_2-fill.svg?v=d5ede8c27fbe13d10f66e8b9af14e9eb4e8b1e363e5c8beab24e359307221bc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
