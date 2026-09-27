export const name="dynamic_form";
export const id="dl_f3ad57b94a470135590d";
export const url=new URL("../icons/dynamic_form.svg?v=ce9e4562b79e81b7a65f41b7ea1634e8d08af5ff37b617bf3f22212147807e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
