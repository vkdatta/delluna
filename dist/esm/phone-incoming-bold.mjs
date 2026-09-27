export const name="phone-incoming-bold";
export const id="dl_d99c9d8cbc80494fb300";
export const url=new URL("../icons/phone-incoming-bold.svg?v=ecc17e724c834b2ef302cabd04c2c298a99e473caabe31a612308ddd663fd656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
