export const name="view_in_ar";
export const id="dl_91a337aa90c83c6ff109";
export const url=new URL("../icons/view_in_ar.svg?v=c018a1254e15afafc43508d5dc9999283ed5b3c2c412670c3fe8770e5ed4f1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
