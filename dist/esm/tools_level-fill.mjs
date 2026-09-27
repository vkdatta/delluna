export const name="tools_level-fill";
export const id="dl_b0406e9d4a28bb0248f6";
export const url=new URL("../icons/tools_level-fill.svg?v=84296a985d58642e83f26a60355a84cbf201035c44e6128e3c44a20cd711e0d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
