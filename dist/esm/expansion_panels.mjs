export const name="expansion_panels";
export const id="dl_6b7ab6e63791433a72f3";
export const url=new URL("../icons/expansion_panels.svg?v=0dc479d1505cbc150746607e5ea5b9da8e5c746ec18aad47dd3e8acc205b6383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
