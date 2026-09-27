export const name="keyboard_external_input";
export const id="dl_dacaa8839e8ecd6f5580";
export const url=new URL("../icons/keyboard_external_input.svg?v=bbfb98eda141ea1147b6fe70a9c5671ef3cc431c7364576581cb1e6db801df42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
