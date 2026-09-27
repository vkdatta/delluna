export const name="lucid_2-layer-arrow-down";
export const id="dl_282f37409e9b4834bb26";
export const url=new URL("../icons/lucid_2-layer-arrow-down.svg?v=7a1b5b9054f2bf51dfca100479c26f3c70dbacac66c3f8f221d9c022d2537400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
