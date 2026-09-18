export const name="icecream";
export const id="dl_d6077664667b47a09c3a";
export const url=new URL("../icons/I/icecream.svg?v=f1a9fdfc0da1a2bce7bcebf97748efa769ff23fc18bafa8e26660cb80d0db1cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
