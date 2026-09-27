export const name="hand-peace-light";
export const id="dl_fda5109a05654ecab69d";
export const url=new URL("../icons/hand-peace-light.svg?v=ede280586bf044bf196462c808a0430b712d6b6108658fac55a0f6c8a0ad5ab1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
