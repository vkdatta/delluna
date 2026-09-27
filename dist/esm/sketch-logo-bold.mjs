export const name="sketch-logo-bold";
export const id="dl_f7293f29c465cd17f87a";
export const url=new URL("../icons/sketch-logo-bold.svg?v=2e5244a70bc86569c3fc25853b9b53d366f9e96ec6ee9d2a1e741ba32f22834f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
