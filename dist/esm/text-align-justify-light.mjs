export const name="text-align-justify-light";
export const id="dl_042b86894bb553868afa";
export const url=new URL("../icons/text-align-justify-light.svg?v=ec16333462dce97f37984e7781179d815941074624f41482326880a465e30733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
