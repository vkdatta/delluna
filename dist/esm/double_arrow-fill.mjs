export const name="double_arrow-fill";
export const id="dl_9ec422ac703ffd0e56c5";
export const url=new URL("../icons/double_arrow-fill.svg?v=fa750af13956d7f4ba93d79046cf6166d3fae594ab72d7ca060e9af195a7446a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
