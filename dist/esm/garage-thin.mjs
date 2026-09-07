export const name="garage-thin";
export const id="dl_be7e685ff6914feda2fa";
export const url=new URL("../icons/garage-thin.svg?v=9af5584c15ce5b9d48756a83713df89c23e1036d6b411f823dda6a327c6f5e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
