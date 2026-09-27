export const name="flag-banner-thin";
export const id="dl_ceec6c393d6741f49918";
export const url=new URL("../icons/flag-banner-thin.svg?v=b9c81e153b441a45b32457445988b5d289faa3365cba71568dbce5c56fb5b1e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
