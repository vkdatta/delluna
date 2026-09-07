export const name="gear-fine-duotone";
export const id="dl_8ec0d35a2f5d4ca68295";
export const url=new URL("../icons/gear-fine-duotone.svg?v=8511b0f23349e29bbe464772778409a91d73b79bb9b9d5c7b3ac374ef54c1366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
