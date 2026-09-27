export const name="responsive_layout";
export const id="dl_a7fc8a401ad308bdf4bf";
export const url=new URL("../icons/responsive_layout.svg?v=4b67dc251ead33495388d2d8c72e9f17b867d72bceab0406d4b406977f957059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
