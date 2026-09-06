export const name="person-arms-spread";
export const id="dl_286a2e2a394f4a86aa0b";
export const url=new URL("../icons/person-arms-spread.svg?v=2b77ca4124fd33b1125981ee0cdb9dff6383ab886d33f24a9ad994826a31d0f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
