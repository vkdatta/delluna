export const name="blueprint-light";
export const id="dl_d3a35b537dca4be7ae23";
export const url=new URL("../icons/blueprint-light.svg?v=c761b5d089ccdd4c9582c0d1c7c9f7a1692394c8c536dc87fc5b29c1584ac745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
