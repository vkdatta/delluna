export const name="folder-simple-star-light";
export const id="dl_a3373c2c0ac64d63b69e";
export const url=new URL("../icons/folder-simple-star-light.svg?v=44073522467d456d889fbb158a57e8ad97dbb008ae8231c524b06bd60ae43f5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
