export const name="expand_circle_down";
export const id="dl_4c82831fe4574cad9fe5";
export const url=new URL("../icons/expand_circle_down.svg?v=7f28b54b03cf79dafb14a07404d11ff22a1fddd6a8620e67e0d1b2e1bffded27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
