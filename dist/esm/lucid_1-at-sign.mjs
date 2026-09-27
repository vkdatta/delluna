export const name="lucid_1-at-sign";
export const id="dl_0ab3d86b7d9b4603aea2";
export const url=new URL("../icons/lucid_1-at-sign.svg?v=4723ffdb66d818c26f073e509e5c70d8d679a832f3b544b1675c765b2fc31235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
