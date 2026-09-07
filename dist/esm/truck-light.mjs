export const name="truck-light";
export const id="dl_7fbd55f1e6274492b2fe";
export const url=new URL("../icons/T/truck-light.svg?v=dab93baf88c2b9d465f60961325209913895549468835f698bbc803dcc0750c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
