export const name="chat-centered-slash-duotone";
export const id="dl_300705eab54645e8bf41";
export const url=new URL("../icons/chat-centered-slash-duotone.svg?v=1ae99d573284e93bd495094b79c49c0129fa6775a32faf2d31d9191b1ba434c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
