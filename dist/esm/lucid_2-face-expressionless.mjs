export const name="lucid_2-face-expressionless";
export const id="dl_13772af748a944cba8b4";
export const url=new URL("../icons/lucid_2-face-expressionless.svg?v=0e0ad8a15a1195c69f1e5327117086c08542427ebd10cde6503057a84a2fde57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
