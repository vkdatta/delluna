export const name="lightstrip-fill";
export const id="dl_57e1efb13a1417668fdf";
export const url=new URL("../icons/lightstrip-fill.svg?v=1ef1135c9ff9d4b69d65939a6d6848dd987e235e023aca343509b1c3c6c1cd31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
