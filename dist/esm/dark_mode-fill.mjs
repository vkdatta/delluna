export const name="dark_mode-fill";
export const id="dl_946a16403df69d590b37";
export const url=new URL("../icons/dark_mode-fill.svg?v=268c840ec6b60756ebad7e68999849b30d1a20d6a3aff19721fd0f85b3f30fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
