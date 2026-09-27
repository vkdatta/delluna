export const name="smiley-bold";
export const id="dl_597b70f9a67720035a59";
export const url=new URL("../icons/smiley-bold.svg?v=5fb7ddfd92adb94dc495dc5ff17ca0656194b1fe3f718e4ae311bf6b73cd34dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
