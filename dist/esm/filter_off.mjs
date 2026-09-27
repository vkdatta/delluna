export const name="filter_off";
export const id="dl_2ad5863cab5e43d7173a";
export const url=new URL("../icons/filter_off.svg?v=cabd5d9ce5993aa76ee3f8fac34837f47a070108ae5b40d2abcab7ae234f9d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
