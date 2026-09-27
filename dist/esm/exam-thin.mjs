export const name="exam-thin";
export const id="dl_6d4d59fa204d44b5b27d";
export const url=new URL("../icons/exam-thin.svg?v=fe7b1ae3bd1d54a0cd8111056691be5e51a0264547349133be44ba885668417a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
