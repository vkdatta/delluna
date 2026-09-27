export const name="chat-teardrop-text-duotone";
export const id="dl_e551a3399bdf463d849f";
export const url=new URL("../icons/chat-teardrop-text-duotone.svg?v=3ceb1b4834a3e53ca93d5dd1b9a3a396bc33901b5a201d69588a1760f220b171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
