export const name="subway-duotone";
export const id="dl_a13d7b921fc8903f4907";
export const url=new URL("../icons/subway-duotone.svg?v=75bd749aca1f49eb1fe1284955efeafa675ec3a8384b5d19dc6d38f88107a724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
