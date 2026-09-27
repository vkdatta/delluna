export const name="test-tube-duotone";
export const id="dl_c18ddcc0fb79cfb7dc9f";
export const url=new URL("../icons/test-tube-duotone.svg?v=1c78349cce452711498717e78baba8fb87bd81fc7808b66cd0a6ad4f4d63f343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
