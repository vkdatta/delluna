export const name="question_exchange-fill";
export const id="dl_63c9fa426a6e9c42c501";
export const url=new URL("../icons/question_exchange-fill.svg?v=563ac206efdcb7be8f223fa39116a6be79a78d4c1f67d6e7d967d17186d94072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
