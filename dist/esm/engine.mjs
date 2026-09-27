export const name="engine";
export const id="dl_dab7a2f7bc294a2ca865";
export const url=new URL("../icons/engine.svg?v=ccadb8f4926e5c6c0815d2a07d7e62e3720f3a2c7df765ace02782ee496a7eab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
