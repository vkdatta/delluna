export const name="celebration-fill";
export const id="dl_a23a3d65b95dc4e03198";
export const url=new URL("../icons/celebration-fill.svg?v=c6d297e0c617d42c32bbb99b629d746d881debf48fbdf64f18ee4e671e6e8c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
