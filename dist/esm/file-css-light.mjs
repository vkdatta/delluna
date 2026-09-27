export const name="file-css-light";
export const id="dl_5bbf2a5d8f994f20a98c";
export const url=new URL("../icons/file-css-light.svg?v=452b4f651834fd334bc689fb3947784c4ea71ce89536678ed40e1dc4524a373a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
