export const name="text_compare";
export const id="dl_741d6babe18b4495988f";
export const url=new URL("../icons/text_compare.svg?v=85cb4f6b387b80f061cfea3b36cc39615271e95fb4ad6ccbab05769e67fbbc10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
