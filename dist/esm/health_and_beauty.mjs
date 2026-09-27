export const name="health_and_beauty";
export const id="dl_500817fc191dde731b38";
export const url=new URL("../icons/health_and_beauty.svg?v=fdc3fc0b416e4fb31ebb542214b637e5396b3b462d44e09282c955169c983fca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
