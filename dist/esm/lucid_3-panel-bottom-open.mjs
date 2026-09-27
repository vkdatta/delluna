export const name="lucid_3-panel-bottom-open";
export const id="dl_c61e2450185c48d89194";
export const url=new URL("../icons/lucid_3-panel-bottom-open.svg?v=84be09d55efcba46e704d9d7c7fb8436fe814431bccc524adb3694e3782c8ce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
