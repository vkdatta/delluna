export const name="keyboard_alt-fill";
export const id="dl_ab15f1016c6d45fb9c86";
export const url=new URL("../icons/K/keyboard_alt-fill.svg?v=f85b2a130aefe32231ded77f74c5454db363733d2a01c49cf026196cba117e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
