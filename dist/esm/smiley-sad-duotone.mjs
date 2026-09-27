export const name="smiley-sad-duotone";
export const id="dl_edc2d83ea2389a2bc51e";
export const url=new URL("../icons/smiley-sad-duotone.svg?v=897fa2dba6a47c907670dc47a2e90c37ad5b26479cdafb3aaa76626a813d1ed1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
