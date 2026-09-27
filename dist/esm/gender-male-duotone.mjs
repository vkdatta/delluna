export const name="gender-male-duotone";
export const id="dl_ee92106c804d46539df8";
export const url=new URL("../icons/gender-male-duotone.svg?v=f7c260844fff21eb157b9d4d77b490cd4826545e43b21430b95d1f775256edaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
