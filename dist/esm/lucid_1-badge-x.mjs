export const name="lucid_1-badge-x";
export const id="dl_2e7448e053b547c4a67c";
export const url=new URL("../icons/lucid_1-badge-x.svg?v=8a6fce625832b99a8ca9db565811fae9c50d6889376ce82683eddb0ba506e84e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
