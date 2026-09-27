export const name="magnifying-glass-minus-light";
export const id="dl_af818734f9f64e128e38";
export const url=new URL("../icons/magnifying-glass-minus-light.svg?v=394d5d28ff76a39db1819ea8a6c1a77d8eb33778baf3278f4dfe13f7a6ddd510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
