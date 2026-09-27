export const name="grains-slash-light";
export const id="dl_aeacc8f5892a4d84baec";
export const url=new URL("../icons/grains-slash-light.svg?v=19e1b0314487a49ae649f46bcf25411b1d1c351a77f5cc5924dc0b06d07a91e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
