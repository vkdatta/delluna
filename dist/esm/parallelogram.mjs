export const name="parallelogram";
export const id="dl_65eabfd299db434b8039";
export const url=new URL("../icons/parallelogram.svg?v=9851e7cd33a5be7c201251aa11e3ca1962422b407ee94d80503bb14b8cb295a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
