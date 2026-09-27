export const name="shoe_cleats";
export const id="dl_39c4c308da15e1f1f692";
export const url=new URL("../icons/shoe_cleats.svg?v=849f4163e21856e8e9921213b0964c4afd5851711bd43e3d2be4c5d581d51eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
