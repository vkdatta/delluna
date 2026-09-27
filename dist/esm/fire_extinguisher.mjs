export const name="fire_extinguisher";
export const id="dl_40acb034d834b29d30cc";
export const url=new URL("../icons/fire_extinguisher.svg?v=f1a90b01bf5a538db3c8a06ad5a5b2b09ae703e582cc1c1dabbf8d47a22d9d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
