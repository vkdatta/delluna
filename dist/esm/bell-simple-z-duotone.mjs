export const name="bell-simple-z-duotone";
export const id="dl_3e6ffdd24ece435da644";
export const url=new URL("../icons/bell-simple-z-duotone.svg?v=363b151ab7ba81b50360b2a44a457716754ab6a2f22d1ba9e488d5ebbd87fb54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
