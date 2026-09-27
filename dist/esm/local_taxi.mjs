export const name="local_taxi";
export const id="dl_5a28dcd7dad2976953e1";
export const url=new URL("../icons/local_taxi.svg?v=0b4d7d2bdd452d74033ef1e554d90ceb398fc7502efcd1d4ed9b5879f63e0110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
