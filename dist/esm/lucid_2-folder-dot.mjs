export const name="lucid_2-folder-dot";
export const id="dl_e0306f3c2aa24b7c8083";
export const url=new URL("../icons/lucid_2-folder-dot.svg?v=4dd2200da4fbe610dc0964d1c64d5442431a27f9949b294bc934759436839fcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
