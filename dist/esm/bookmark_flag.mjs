export const name="bookmark_flag";
export const id="dl_5cb3a30ef55c95242789";
export const url=new URL("../icons/bookmark_flag.svg?v=4f89f28be4f09d1be39eecd60b0c36972fbb1fb4d319482a3639eb4f8846dfa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
