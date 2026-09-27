export const name="binoculars-light";
export const id="dl_e1b4eed64662409b90f6";
export const url=new URL("../icons/binoculars-light.svg?v=b24298082b8ae721ccc047052c16ecb3e26d0b08eb2d5c7eaa67fb6f603d4c8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
