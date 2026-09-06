export const name="question-bold";
export const id="dl_b8a1a9e7b9884df5b462";
export const url=new URL("../icons/question-bold.svg?v=605254a6f6dc50f1a34bf7d8995d01902e064c2e459fbe8108b8f7890de7c259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
