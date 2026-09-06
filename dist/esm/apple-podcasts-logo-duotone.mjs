export const name="apple-podcasts-logo-duotone";
export const id="dl_c05b4aa62b9e4c04a9bc";
export const url=new URL("../icons/apple-podcasts-logo-duotone.svg?v=eebf00c64487203376e29c47dee4a4ff2e14fdfecbdd68806f69d4c58facc842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
