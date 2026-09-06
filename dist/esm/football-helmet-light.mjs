export const name="football-helmet-light";
export const id="dl_a0815ab521d8435d9e22";
export const url=new URL("../icons/football-helmet-light.svg?v=eac6d5fc20aafcb9e32a739cecb2164e3d51235a91b9041b1ec66e8f76f7c773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
