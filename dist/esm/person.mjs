export const name="person";
export const id="dl_c23709d3716e507a657a";
export const url=new URL("../icons/person.svg?v=7fd5283e2cb1e759e0421932aef3c07a9c23a1bd4fdeeaf8af18c1a21827f602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
