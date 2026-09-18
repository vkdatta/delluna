export const name="person_2";
export const id="dl_b167ec0be16c41778207";
export const url=new URL("../icons/person_2.svg?v=2d91645631a720fa3e727029d6b88752e87401ff1320fce880bbceff79dfefe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
