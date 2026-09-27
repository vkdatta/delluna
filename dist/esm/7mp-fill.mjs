export const name="7mp-fill";
export const id="dl_f65701e1e6b167cb35f7";
export const url=new URL("../icons/7mp-fill.svg?v=3652ad0ba730b8a302679ad7eef9edba4b173d8c1b697ecc9c5a91a148e254bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
