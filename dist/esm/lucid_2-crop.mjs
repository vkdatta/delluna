export const name="lucid_2-crop";
export const id="dl_2a265be51fa14db5aa32";
export const url=new URL("../icons/lucid_2-crop.svg?v=350ddd5dc8a7a34bb508c4457b711a09eeea28e22b0238eff85c34c54b58185e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
