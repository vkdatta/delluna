export const name="sock-light";
export const id="dl_95bee99822fa431b9d4e";
export const url=new URL("../icons/S/sock-light.svg?v=ecf058ad79434e89fdafbe22cfc114f644c86c1126f0d4ad990e5930b9b02ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
