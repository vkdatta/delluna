export const name="local_drink";
export const id="dl_c51f40a22ed24c398a05";
export const url=new URL("../icons/local_drink.svg?v=1083879eb6d816b05c66e7ab14a461440695921dfa31d31ed2fe349ee1a93b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
