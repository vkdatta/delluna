export const name="light-fill";
export const id="dl_4e65a4c5f654f0599fba";
export const url=new URL("../icons/light-fill.svg?v=f1866ca13f678f34c48dfdea296d8a053e5933b04707419a5cbdeef97e50bdbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
