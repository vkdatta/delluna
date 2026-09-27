export const name="question-bold";
export const id="dl_b8a1a9e7b9884df5b462";
export const url=new URL("../icons/question-bold.svg?v=1158f73cc659d23711f71e2e469294d38d614087a008062d0bf1d513155f8678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
