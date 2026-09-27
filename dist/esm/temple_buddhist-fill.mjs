export const name="temple_buddhist-fill";
export const id="dl_eab7aa7abaf0254549e2";
export const url=new URL("../icons/temple_buddhist-fill.svg?v=ed5f9377d2edab4598edb8a8be681f9ee44ad06660f06f59ffb5f9dcf89d610d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
