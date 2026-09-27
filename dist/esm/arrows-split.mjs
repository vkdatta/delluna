export const name="arrows-split";
export const id="dl_9b769305c7bc42d49b91";
export const url=new URL("../icons/arrows-split.svg?v=f4d3ab04f4de92126598a5d0e8d78ff76b9f083bc2ddef3b164a3e8fff6f1ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
