export const name="vector-three-light";
export const id="dl_03bd335322ca4ebf4cfd";
export const url=new URL("../icons/vector-three-light.svg?v=bf33325a183060660f44d948e1de8b884f15326cd5f9727a8409e32a3780b16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
