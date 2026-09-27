export const name="apple-podcasts-logo-fill";
export const id="dl_9bb7307b5a214db5b35e";
export const url=new URL("../icons/apple-podcasts-logo-fill.svg?v=79fcd53bb3d75b0b2e221817d4bff025f98064792d0026294e8511de1da6a3ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
