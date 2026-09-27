export const name="mobile_chat";
export const id="dl_1df6c7c0cb214e791a46";
export const url=new URL("../icons/mobile_chat.svg?v=cd051f7da56019e5e18b148aefc3b07b0e3ab0d8399af32f6e518ddfc4418d7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
