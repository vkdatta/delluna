export const name="speaker-simple-slash-thin";
export const id="dl_e9480681c489862bd462";
export const url=new URL("../icons/speaker-simple-slash-thin.svg?v=e0554421351685b751acd5de7eb7911b2aef976fa54412bc93605c19a9cb83f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
