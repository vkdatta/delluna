export const name="lucid_1-anvil";
export const id="dl_659a6fbcf8894cd8a7c8";
export const url=new URL("../icons/lucid_1-anvil.svg?v=c53c4615d7f15e03aea4b13e798deded074303837586389bc2d15ff01436252b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
