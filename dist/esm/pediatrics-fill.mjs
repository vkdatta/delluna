export const name="pediatrics-fill";
export const id="dl_4e9e0f2090be313cc209";
export const url=new URL("../icons/pediatrics-fill.svg?v=c58173194d1b0901979012af92396775082ef575a5d844aacb2d7470ddec80a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
