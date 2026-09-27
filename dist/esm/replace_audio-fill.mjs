export const name="replace_audio-fill";
export const id="dl_89b2122ae19b94abdf66";
export const url=new URL("../icons/replace_audio-fill.svg?v=abf097f0d6389c66a378b471a5e0f79cec002e3f9c36ecf278d0b1d9695fcb1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
