export const name="battery_plus-fill";
export const id="dl_055c6a1044c7444cbb78";
export const url=new URL("../icons/battery_plus-fill.svg?v=22508f8352686277258c1cefd3c54f45c201e771a54d16222f7b9b6523b7d5c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
