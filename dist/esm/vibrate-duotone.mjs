export const name="vibrate-duotone";
export const id="dl_24deee0c5920e0c3fad7";
export const url=new URL("../icons/vibrate-duotone.svg?v=71d9226dc7d23b5d4fbfe88430a15199ca52b60142532e03dc7ad24a530ae9f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
