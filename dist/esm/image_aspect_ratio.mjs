export const name="image_aspect_ratio";
export const id="dl_e8d82c5f39489fd9552b";
export const url=new URL("../icons/image_aspect_ratio.svg?v=693080394bdb36d5d1a103c81f3cb0e0d7355ae1319bb006b0b43f5db8a7b368",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
