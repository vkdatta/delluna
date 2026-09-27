export const name="medal-bold";
export const id="dl_b28418c0299d4e20b15c";
export const url=new URL("../icons/medal-bold.svg?v=d62c30cad76350eb73ce3dab10e524a42283f606a8d2e04eb6af84358def101e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
