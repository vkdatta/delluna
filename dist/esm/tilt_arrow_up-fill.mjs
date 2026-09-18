export const name="tilt_arrow_up-fill";
export const id="dl_3470f2647e5148a0970e";
export const url=new URL("../icons/tilt_arrow_up-fill.svg?v=04f021df57a49b0ff3f086be73343b8c66d795ba9df714b2ac72ef231d908e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
