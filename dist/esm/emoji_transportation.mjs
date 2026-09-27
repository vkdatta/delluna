export const name="emoji_transportation";
export const id="dl_6d8c7fcd11859f48e5a3";
export const url=new URL("../icons/emoji_transportation.svg?v=eb741e2a77f598d7692eafdff8b0cd4bdeaaf921ed1263da20fc76e873b281a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
