export const name="mobile_sound_off-fill";
export const id="dl_2aa1979956ff5d996894";
export const url=new URL("../icons/mobile_sound_off-fill.svg?v=48fbbaebfefb1237ad88207345d9c206f384642d97f877d6578471d88b804047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
