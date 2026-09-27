export const name="graphics-card-thin";
export const id="dl_07daf49b09584738bc83";
export const url=new URL("../icons/graphics-card-thin.svg?v=47a8ee4091633ed62fce7c20d78245ce19f9eab915c610678ac6873792974efb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
