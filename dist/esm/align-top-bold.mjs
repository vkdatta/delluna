export const name="align-top-bold";
export const id="dl_739afd4c1bc647b7a82d";
export const url=new URL("../icons/align-top-bold.svg?v=5301a0f72ae68bff3d6913a16374c98e55917bfc64b4de237109bebf42cd7091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
