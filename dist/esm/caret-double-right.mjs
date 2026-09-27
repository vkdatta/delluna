export const name="caret-double-right";
export const id="dl_f6957b87bd0c4be69780";
export const url=new URL("../icons/caret-double-right.svg?v=18cbabbbf314565f0d474dd1609ccea823b3a6a0b2751ced38d7b5dc1345931c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
