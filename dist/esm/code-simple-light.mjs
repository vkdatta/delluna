export const name="code-simple-light";
export const id="dl_d4b2d89cd37f4e45872f";
export const url=new URL("../icons/code-simple-light.svg?v=0967896bd4a89aab7b29170599ee266f75f0f3ed87932f7de55917b8304ed722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
