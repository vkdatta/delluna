export const name="clock_loader_40-fill";
export const id="dl_c6ab249da65533689269";
export const url=new URL("../icons/clock_loader_40-fill.svg?v=a3d77ab5789dc8e9e83f4f5b52e2b9ec62457845198c98224f23e9a3b54a9a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
