export const name="star-cross";
export const id="dl_56f89faa41e0110cc200";
export const url=new URL("../icons/star-cross.svg?v=c43aa3af3334441c325bcfea9cb704e57ac3cb26ebb66ce7ddb942cec0f4567a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
