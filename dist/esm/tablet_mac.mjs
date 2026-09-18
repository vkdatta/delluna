export const name="tablet_mac";
export const id="dl_dc6604e99c16460a9db2";
export const url=new URL("../icons/tablet_mac.svg?v=ec0245c4a73e76d8e27a8c8145e6c793464417bcdc2fe80476616df7b9546b59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
