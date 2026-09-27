export const name="person-simple-ski";
export const id="dl_da1cd0c246924bf08f30";
export const url=new URL("../icons/person-simple-ski.svg?v=8e9407c249e1409305dc45044936f003e87b8dc4f4fcfd02ef3abb5085c91d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
