export const name="stylus_pencil";
export const id="dl_6959e5f0834cc3b5eb75";
export const url=new URL("../icons/stylus_pencil.svg?v=c476161d38cb56457f23db78c1b401b3f5c7fd899629cdafd1cf5d342f5b0141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
