export const name="expand-fill";
export const id="dl_42b5fe3dab635a3f3253";
export const url=new URL("../icons/expand-fill.svg?v=b81152807d0f13f760f6eabf9587f75017e99aef196104c865810513c6fe8135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
