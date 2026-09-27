export const name="caret-circle-double-right-thin";
export const id="dl_cd6a0a417596447891f8";
export const url=new URL("../icons/caret-circle-double-right-thin.svg?v=7dd6f9c75f85a78a48a6660040f94301d678d81e1617c5b3a050d773c2301ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
