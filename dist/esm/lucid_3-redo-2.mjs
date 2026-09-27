export const name="lucid_3-redo-2";
export const id="dl_c6c687fde0a448bbb481";
export const url=new URL("../icons/lucid_3-redo-2.svg?v=a59ffab9838e8d6a6117b89e765e7091e919ea4466424ab939e711225d2c97d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
