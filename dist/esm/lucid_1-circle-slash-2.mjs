export const name="lucid_1-circle-slash-2";
export const id="dl_9edf2df2a2b845628538";
export const url=new URL("../icons/lucid_1-circle-slash-2.svg?v=84c9303c016bd0de5b44b2fce89ef21ef4fc3f1cca2d664a6304668b1e642cf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
