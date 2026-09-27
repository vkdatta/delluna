export const name="plus-minus-light";
export const id="dl_b22414d3b8b04e7ea602";
export const url=new URL("../icons/plus-minus-light.svg?v=df4641e194b77726597cc70510827a45bd48cb01c33c23c23d3a55471692578b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
