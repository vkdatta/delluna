export const name="lucid_2-logs";
export const id="dl_3f4efef5c7464ec59382";
export const url=new URL("../icons/lucid_2-logs.svg?v=54670099ae5aa209408e1e41bb72cb9ee51a3e548f4811fecb60eab66e230977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
