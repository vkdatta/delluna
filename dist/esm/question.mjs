export const name="question";
export const id="dl_d9d2b78c05f942a3b6c2";
export const url=new URL("../icons/question.svg?v=fd9a87cfce2abaa9113058be90e5281da58f665e2185974b80c7425d5c7fe2d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
