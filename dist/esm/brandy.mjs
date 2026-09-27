export const name="brandy";
export const id="dl_d1b5b336d9584c2289d2";
export const url=new URL("../icons/brandy.svg?v=38ff6a0e1d78de1da719d1edc1b4a4f94006943f717d6379e8596ff7be7746c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
