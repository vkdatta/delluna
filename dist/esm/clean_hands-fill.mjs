export const name="clean_hands-fill";
export const id="dl_6b40fce166c84258b104";
export const url=new URL("../icons/clean_hands-fill.svg?v=c6d9d9576f0c03abbedd55d3f334caf8217fa5efa77deb81a58ab66767f2b312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
