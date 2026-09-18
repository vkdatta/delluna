export const name="person_add_disabled-fill";
export const id="dl_8428bb4c773f4b698672";
export const url=new URL("../icons/person_add_disabled-fill.svg?v=dd964955c6586ca2473b55f203c14537ca370165298d005bcac999ec035a026f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
