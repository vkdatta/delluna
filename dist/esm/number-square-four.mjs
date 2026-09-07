export const name="number-square-four";
export const id="dl_36c0ad10c1c940fd988e";
export const url=new URL("../icons/number-square-four.svg?v=e1dcddd847d376c6d5b7c5a82e03becfc489f49fc275a979bfd2ffd6004b07af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
