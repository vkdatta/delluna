export const name="lucid_1-circle-chevron-right";
export const id="dl_059f0dabbec94b9fb9dd";
export const url=new URL("../icons/lucid_1-circle-chevron-right.svg?v=8e9f72e676034e2f8fe5519fa6b36b09c316304a623f961536c96097dc0a7e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
