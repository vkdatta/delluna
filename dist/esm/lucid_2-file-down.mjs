export const name="lucid_2-file-down";
export const id="dl_24930fe90af4415e90c2";
export const url=new URL("../icons/lucid_2-file-down.svg?v=01bef04e31cdc3675bc81682673b46bb2c127a2224823ec6e7366a344700b1f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
