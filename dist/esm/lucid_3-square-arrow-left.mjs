export const name="lucid_3-square-arrow-left";
export const id="dl_c4bc146b6e2747bfaa7f";
export const url=new URL("../icons/lucid_3-square-arrow-left.svg?v=ea6c05c8439eadc1c2cc7d528ad308750cb561af3f67a9b7d5eafd61a1239dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
