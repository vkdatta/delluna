export const name="file-jsx-bold";
export const id="dl_d51a847f9e644c44a793";
export const url=new URL("../icons/file-jsx-bold.svg?v=2ef041967599958fa921b1677a56cc2d26629c41c4c3043f84f970a81bdbb4ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
