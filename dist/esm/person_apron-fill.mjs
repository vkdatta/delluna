export const name="person_apron-fill";
export const id="dl_65b0b14f8f7bc26f9485";
export const url=new URL("../icons/person_apron-fill.svg?v=2d8f377bfe9442c48c914ba054a517c6b4ad2591d1d6a45b3bffd93fcf25eb15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
