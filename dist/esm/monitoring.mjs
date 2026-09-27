export const name="monitoring";
export const id="dl_6e5f560947492065a126";
export const url=new URL("../icons/monitoring.svg?v=a83a4a1a80a62c9a259cfea803afb95627b63eb9ece6292e9732f119ca6f8a1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
