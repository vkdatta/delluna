export const name="flow-arrow-fill";
export const id="dl_a5578449f113449e8b5b";
export const url=new URL("../icons/flow-arrow-fill.svg?v=4e3a04c7b58c1c2253d88f2d18c111f9c1c5a92a307ddf53272a0fbc232767ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
