export const name="shear";
export const id="dl_4319da88c03e4b2984ee";
export const url=new URL("../icons/shear.svg?v=bce3d54e1ca4600f1cf42f4a79cec2323770f9ebae87adfe231a7e74f1510068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
