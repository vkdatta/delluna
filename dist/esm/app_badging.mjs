export const name="app_badging";
export const id="dl_3c8bfcee2edc0d0f85f0";
export const url=new URL("../icons/app_badging.svg?v=5b67ba98637e79c1a38b2485afd1e296271df0434906a5e126a99512abb32015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
