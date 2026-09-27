export const name="satellite";
export const id="dl_113e93c7081eea2fb8b2";
export const url=new URL("../icons/satellite.svg?v=390977c99d5ad2b2a025dd6208917469ca12da6e45167b051e4e5e509db1987e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
