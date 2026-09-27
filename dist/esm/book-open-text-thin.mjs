export const name="book-open-text-thin";
export const id="dl_75934a76933148e19bf4";
export const url=new URL("../icons/book-open-text-thin.svg?v=d1de398be1d1f74ae3fb263299f97fa2212e62df7b5c4e7cb2715b7d9d53169f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
