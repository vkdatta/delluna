export const name="bookmark_flag-fill";
export const id="dl_892507b7e35af59dece6";
export const url=new URL("../icons/bookmark_flag-fill.svg?v=0dd57a69e18ad6caf4efbfaedb58d3f7c1e0893e7502a1afa424af36b63a1e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
