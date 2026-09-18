export const name="keyboard_keys-fill";
export const id="dl_a7b2be27fb8e416bb558";
export const url=new URL("../icons/K/keyboard_keys-fill.svg?v=037acc0f928f401151c5dfd973aeb3c4000490f26692f0b14e470ab594291739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
