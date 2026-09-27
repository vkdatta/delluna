export const name="hard-drives-light";
export const id="dl_395305c74cb741f4a80f";
export const url=new URL("../icons/hard-drives-light.svg?v=cd1c02847b4aec19ba8c71424a484b3dca7e116c0009e826b9e1bfd76ca60dc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
