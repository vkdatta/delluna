export const name="plus-minus-duotone";
export const id="dl_b7d13fef4c904da2a7b6";
export const url=new URL("../icons/plus-minus-duotone.svg?v=a06c247c6917d69a567b1808b1b10a7d0b5ef7d89e5cf91a4ccbe03ba71c635f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
