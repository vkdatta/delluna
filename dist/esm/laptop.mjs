export const name="laptop";
export const id="dl_33818e21249a48a09782";
export const url=new URL("../icons/laptop.svg?v=7b1fea39cbddac2bf73b8c4d13e8ed534e6ac2c11e9b37f0e2f48ca118b02744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
