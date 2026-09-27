export const name="fit_page-fill";
export const id="dl_333cd410168c71ca709d";
export const url=new URL("../icons/fit_page-fill.svg?v=ef3453fc51aa6fba2d1a09c38bfd017b72ee65ce38b0ad613d40e0307549a9b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
