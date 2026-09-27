export const name="heart-break";
export const id="dl_8c1a34f102634712873e";
export const url=new URL("../icons/heart-break.svg?v=c796f178c6b81a94a9f6b0ef1ae5b6ce51345675b58f6ea99ad780d24f60f565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
