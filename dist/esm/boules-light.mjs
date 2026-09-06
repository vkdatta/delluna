export const name="boules-light";
export const id="dl_876dc35f9c3143f6abcd";
export const url=new URL("../icons/boules-light.svg?v=80d788030dafdddc60d5b38b7bd18584d534e8049919ab2332931ab263b37528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
