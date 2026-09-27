export const name="square-off";
export const id="dl_4384866b3a0242c1b6b4";
export const url=new URL("../icons/square-off.svg?v=3efe62bddf60089a46cf3d89222a2be18aee1f4f66510c66e1a56ed6934fa0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
