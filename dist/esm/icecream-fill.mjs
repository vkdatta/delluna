export const name="icecream-fill";
export const id="dl_a846f32803c843ca9834";
export const url=new URL("../icons/I/icecream-fill.svg?v=bf4bbe1f0dd0e165557f783db96d2cbf5027dd84edb2cb0f54c038144b933410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
