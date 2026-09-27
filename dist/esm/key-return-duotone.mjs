export const name="key-return-duotone";
export const id="dl_9476e24f0a9541d5aabc";
export const url=new URL("../icons/key-return-duotone.svg?v=b2d017e70775ff45349dadc5d1e92c366578ed8e5e97597d1c10bbeb38c3bce4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
