export const name="emoji_language";
export const id="dl_264e2dd7bee574febb38";
export const url=new URL("../icons/emoji_language.svg?v=3d5dde411405f79939d10f92052b0cd002e60b10d0cd08b65f98f2fa8e059659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
