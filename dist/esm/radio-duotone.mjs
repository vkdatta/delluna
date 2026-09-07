export const name="radio-duotone";
export const id="dl_907b439f09134120993a";
export const url=new URL("../icons/radio-duotone.svg?v=228950fbcccae50de14a68a3e66d722546d52113fab8fbc536d954ad02f6a853",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
