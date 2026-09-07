export const name="speaker-simple-low-duotone";
export const id="dl_07d4c1c043c24739a3c8";
export const url=new URL("../icons/S/speaker-simple-low-duotone.svg?v=3f2b6c9a1a40ec13433eb026e59af3c71e9a88c144bf04624b936a25a197464f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
