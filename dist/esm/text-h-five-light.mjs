export const name="text-h-five-light";
export const id="dl_6118fb26cdda445f84b8";
export const url=new URL("../icons/T/text-h-five-light.svg?v=cc42a6a0c5c8032110a3608d7b555e7019f04bb9463f94845be44eae2765bb2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
