export const name="image-thin";
export const id="dl_b816f8ace9784c609c34";
export const url=new URL("../icons/image-thin.svg?v=1283b73b4252efe43f7a3f087979dac74648cd30df531f039da45b0081812eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
