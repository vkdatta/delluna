export const name="integration_instructions-fill";
export const id="dl_23ef04c184e8dc36643d";
export const url=new URL("../icons/integration_instructions-fill.svg?v=8c69b90c7dfe8ca7415e7ee7af870485d17579203501753a88634248da24605a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
