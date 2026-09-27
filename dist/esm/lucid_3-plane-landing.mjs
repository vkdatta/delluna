export const name="lucid_3-plane-landing";
export const id="dl_3002827e51264fa384ac";
export const url=new URL("../icons/lucid_3-plane-landing.svg?v=5451eeade6ebb5372cc1d22ad17566363ab68f1e8db8e60006171541d09d3de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
