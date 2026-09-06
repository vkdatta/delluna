export const name="lucid_1-chevron-up";
export const id="dl_a48732026acd4dd6adb3";
export const url=new URL("../icons/lucid_1-chevron-up.svg?v=30733a018bfe03d748ea3ae2dade52d6aff56b273b7720396a7f17ee9156e799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
