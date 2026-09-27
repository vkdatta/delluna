export const name="member-of-light";
export const id="dl_15b94929617548cbbfc4";
export const url=new URL("../icons/member-of-light.svg?v=4973eb2f7239ebcfe90c31ccd0166d27dc91404000ef0b51e757c9889aca3875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
