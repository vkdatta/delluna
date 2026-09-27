export const name="speaker-hifi-bold";
export const id="dl_9c16fbb2bc9dbe2a9b86";
export const url=new URL("../icons/speaker-hifi-bold.svg?v=12d169b78c383a1260a605063897d812cdec150bf79e86e774eab4da43ccebc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
