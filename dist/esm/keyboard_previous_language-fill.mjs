export const name="keyboard_previous_language-fill";
export const id="dl_9e36d74ecd1082b83188";
export const url=new URL("../icons/keyboard_previous_language-fill.svg?v=e366c8ef504ac6ca9ceda8cd278ad1825ccf26a44a942655a82d2e14cb8b2047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
