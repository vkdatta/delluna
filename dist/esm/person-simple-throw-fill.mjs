export const name="person-simple-throw-fill";
export const id="dl_c1f66a0d158f46808336";
export const url=new URL("../icons/person-simple-throw-fill.svg?v=07d1c9b62512854c597870507147c3c979cc618bb913728642db1fea36d2a1f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
