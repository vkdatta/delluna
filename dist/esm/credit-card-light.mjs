export const name="credit-card-light";
export const id="dl_a264882a053f4ae0893c";
export const url=new URL("../icons/credit-card-light.svg?v=71d0db297901b35d16aba30f63390dde2478f462d70b263fcdbd66f6958a3ceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
