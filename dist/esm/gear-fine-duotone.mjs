export const name="gear-fine-duotone";
export const id="dl_8ec0d35a2f5d4ca68295";
export const url=new URL("../icons/gear-fine-duotone.svg?v=b87617dd3670b94091c9492bcae9ce86ae304f208e6d380ccc2c7dc2c8981b48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
