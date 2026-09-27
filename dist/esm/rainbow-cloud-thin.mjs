export const name="rainbow-cloud-thin";
export const id="dl_539a1e91f8364d809ee8";
export const url=new URL("../icons/rainbow-cloud-thin.svg?v=5f526fab90168f98d73a33ecc3974745521adc8cc21e1f49c65c8ebb2be87065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
