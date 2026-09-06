export const name="lucid_3-notepad-text";
export const id="dl_a2ce6e3c73434725a77f";
export const url=new URL("../icons/lucid_3-notepad-text.svg?v=452cde78750404a8d47dd282edda6904da11822ffa2bee76f9e6a2f813f4ffac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
