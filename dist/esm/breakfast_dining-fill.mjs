export const name="breakfast_dining-fill";
export const id="dl_8270d7f3663b4b52a01d";
export const url=new URL("../icons/breakfast_dining-fill.svg?v=8e7e1095c0598044e53d5f5ea6ef511672be5450f9bd4b88f5f222f05bb81042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
