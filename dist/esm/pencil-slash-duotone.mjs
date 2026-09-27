export const name="pencil-slash-duotone";
export const id="dl_01a242d451b446b9a64a";
export const url=new URL("../icons/pencil-slash-duotone.svg?v=7c8652e184e4279e8eb1c8e17fd9eb46371a4da537751b3d06b2cbd114451558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
