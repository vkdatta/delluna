export const name="transition_push-fill";
export const id="dl_3b7922b5fe73df8e0976";
export const url=new URL("../icons/transition_push-fill.svg?v=ded23295a1771b0439be28610dad53bdbdd08b70d9b70603bfe29a0831a4020a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
