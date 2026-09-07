export const name="smiley-sticker-thin";
export const id="dl_a75ed75d47294fe3b71f";
export const url=new URL("../icons/S/smiley-sticker-thin.svg?v=00b2d4ed3a4811e85c0a94013ab6e451b1c9214acae3c9c835764bc77f8310cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
