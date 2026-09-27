export const name="arrow-circle-right-fill";
export const id="dl_c6b98316657f4fc9ab42";
export const url=new URL("../icons/arrow-circle-right-fill.svg?v=db7ef7347d7b8984a179e7e00da510fd1839d812c6360a2a10545b6ce7c2bc3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
