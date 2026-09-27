export const name="lucid_2-file-key";
export const id="dl_950f3fe7c3794423891d";
export const url=new URL("../icons/lucid_2-file-key.svg?v=b4a7411c301c95599dfda200e27be3a73d686f094b9750160c853ed6695f6c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
