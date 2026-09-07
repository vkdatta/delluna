export const name="selection-light";
export const id="dl_0ceb4ed7b9d44c94adcd";
export const url=new URL("../icons/S/selection-light.svg?v=1fe0dafaf760216348c4fa941aeca30ea7f039d87ecdedbc8b0016429d4dcfb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
