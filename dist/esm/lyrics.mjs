export const name="lyrics";
export const id="dl_e120f6f0a7a7fc64db50";
export const url=new URL("../icons/lyrics.svg?v=6c4d0255866f925b4e3c40922d1e89b286b7b758309e991acb3299bbae22b037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
