export const name="camping";
export const id="dl_c96238d114ab4cc888f1";
export const url=new URL("../icons/camping.svg?v=2fbe5f0e288ebc4f85a402089eaab78b704dafb261a987bf70b9caec4e42c9ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
