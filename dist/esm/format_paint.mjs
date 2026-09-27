export const name="format_paint";
export const id="dl_b30793f824c700fd1984";
export const url=new URL("../icons/format_paint.svg?v=b1cc4ef487c8ef2178a9e8e4b1e5d110f7fbdfd120eb8da56c2dbda2b5f0a98d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
