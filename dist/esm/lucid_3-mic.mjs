export const name="lucid_3-mic";
export const id="dl_aebfb823f9234c09bf8e";
export const url=new URL("../icons/lucid_3-mic.svg?v=330565e48ea8b6bc744ac6b5c72dc634dcd23ba430b2d0221e10e21cebc81cf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
