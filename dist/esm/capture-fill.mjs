export const name="capture-fill";
export const id="dl_6453db01234022bb4dcc";
export const url=new URL("../icons/capture-fill.svg?v=fd8b6c0050a9e7b39221afa27c1e778015f12c9dd14d83bb3732d92f806f45f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
