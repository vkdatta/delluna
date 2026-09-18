export const name="padding-fill";
export const id="dl_332212e214974850b2f2";
export const url=new URL("../icons/padding-fill.svg?v=0d451d6c8ca9cbab389df5a7056efea2a2a423c400f2b1744df947577434f113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
