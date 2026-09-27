export const name="8mp";
export const id="dl_221800c891815b1b9dd6";
export const url=new URL("../icons/8mp.svg?v=cef46d759173bcd8675dfbfbda53cde5c1215fb77c8587dd718e75511621ac4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
