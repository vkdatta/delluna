export const name="octagon-bold";
export const id="dl_19d58ed8a3514ef5827c";
export const url=new URL("../icons/octagon-bold.svg?v=4d73e901a0d1ed9ac672e7cd1214c249352b98222cd1490fa6a96ff8c0183300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
