export const name="water_lock-fill";
export const id="dl_290ec9e3951567058461";
export const url=new URL("../icons/water_lock-fill.svg?v=465b5958007513189fdc6ef3aec242aa094687155c3a6e313219bab73ef7cc29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
