export const name="speaker-simple-high-thin";
export const id="dl_c59623254bd74afcae2f";
export const url=new URL("../icons/S/speaker-simple-high-thin.svg?v=f87d0b16333062a624e43b709f3669c924d40cc74ef5a2965a9577854008a578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
