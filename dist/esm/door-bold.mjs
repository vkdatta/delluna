export const name="door-bold";
export const id="dl_349553dc27924f7da88b";
export const url=new URL("../icons/door-bold.svg?v=cbb28ba620fe28b2cc58f385c1c670b095ead172827312a803c95cb6f187ef2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
