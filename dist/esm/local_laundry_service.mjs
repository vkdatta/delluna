export const name="local_laundry_service";
export const id="dl_9bb038f2de521f3c0594";
export const url=new URL("../icons/local_laundry_service.svg?v=eb8d3453b971c3d7c710856e6c496ff1259e21249bf0a83c6c72bda70ffe1fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
