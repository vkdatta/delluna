export const name="shapes-bold";
export const id="dl_f273655abb93ee55df2d";
export const url=new URL("../icons/shapes-bold.svg?v=28775d39054c176408ae547f406721a96d8c3a1c0dd4d37181c9fa65c599a700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
