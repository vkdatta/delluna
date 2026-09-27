export const name="detector_smoke";
export const id="dl_144829399b2b9e54b4f1";
export const url=new URL("../icons/detector_smoke.svg?v=5e9c1ec1bd7c902d15debf4628a2966eee214c0fb29611c6a7017467abdee8af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
