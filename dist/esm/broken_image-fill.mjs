export const name="broken_image-fill";
export const id="dl_a9913d05da58b5754453";
export const url=new URL("../icons/broken_image-fill.svg?v=0a2a76c702bbf0e39e16ed33cbac12df146a7b94e2a15eb08ce1213a58824757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
