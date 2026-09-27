export const name="chat-teardrop-bold";
export const id="dl_47229015c28c4b0592c2";
export const url=new URL("../icons/chat-teardrop-bold.svg?v=691bdbd1680376a2aa9945543ece1b1046aa59cd813252a5e9835ebc951461f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
