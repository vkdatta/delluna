export const name="package_2";
export const id="dl_a7711422a98c69c01671";
export const url=new URL("../icons/package_2.svg?v=e769b0b489f4d4207f65dffb926cb66e2b08eec4c9b122f7792f8b2900638e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
