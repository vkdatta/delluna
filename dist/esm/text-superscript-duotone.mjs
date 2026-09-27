export const name="text-superscript-duotone";
export const id="dl_f30268c8106dc51d0072";
export const url=new URL("../icons/text-superscript-duotone.svg?v=0edde75f09512c59f08d200d96a80a44ff444d50a1ded36e0f482b752ca12dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
