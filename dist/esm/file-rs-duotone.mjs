export const name="file-rs-duotone";
export const id="dl_6f789b7c4e0f46c3a6ee";
export const url=new URL("../icons/file-rs-duotone.svg?v=81340f22ff0c82ff2bad081a1bb64c32308e27555edb6eb441d2e6fcceff92de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
