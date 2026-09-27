export const name="diamond";
export const id="dl_74f5c7bab0d74f6e80a0";
export const url=new URL("../icons/diamond.svg?v=b88222b51232372c630bf683d73c758206cf8411267b4f5ef3aa99690cd94a24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
