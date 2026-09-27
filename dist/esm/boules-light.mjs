export const name="boules-light";
export const id="dl_876dc35f9c3143f6abcd";
export const url=new URL("../icons/boules-light.svg?v=800ccc08e76e69cf488b9cd60165d244540fa714827d23f28d9c19dcd2816677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
