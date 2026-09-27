export const name="magnet";
export const id="dl_1825d346cf8b4b84bfdd";
export const url=new URL("../icons/magnet.svg?v=91def0a6636679c305cd59efd1c70b2e496810052a0d9b16ff42c0420fc0a095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
