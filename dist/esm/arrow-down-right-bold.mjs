export const name="arrow-down-right-bold";
export const id="dl_1e315d461f804aceb71c";
export const url=new URL("../icons/arrow-down-right-bold.svg?v=6969a26e1cc3512b369a7009371869d51b5ca3614ee7d5493220b1640ed0be80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
