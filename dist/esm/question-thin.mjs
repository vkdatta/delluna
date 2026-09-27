export const name="question-thin";
export const id="dl_d0c925129b5741778310";
export const url=new URL("../icons/question-thin.svg?v=6eb1d127f94b4202ece73f2d9eb178124d0679a54cd12364aaa665860878a9a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
