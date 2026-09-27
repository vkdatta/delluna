export const name="lucid_3-notepad-text";
export const id="dl_a2ce6e3c73434725a77f";
export const url=new URL("../icons/lucid_3-notepad-text.svg?v=86bf1cb88487f320b8a9c13cafce67d91a2db7ceff7399f24008e816b877fcc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
