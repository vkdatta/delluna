export const name="tag-x";
export const id="dl_242473bce6e6482aa14f";
export const url=new URL("../icons/tag-x.svg?v=93b9308c6e15ea14f158aa73f39daed6a15a856f234db1529dec2a4fa31224db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
