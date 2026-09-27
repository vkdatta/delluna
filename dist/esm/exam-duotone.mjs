export const name="exam-duotone";
export const id="dl_572863321dde4db99836";
export const url=new URL("../icons/exam-duotone.svg?v=63ef52f0e028349c923e4032c0b9ecd367ef0b0bcdddb7329030ae94d878b9a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
