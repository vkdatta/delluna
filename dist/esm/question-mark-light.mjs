export const name="question-mark-light";
export const id="dl_09d5a818ef524e1f8d9e";
export const url=new URL("../icons/question-mark-light.svg?v=fdab144b800a3e05ec182cc0c3739c02aca13f1d0b7e0803c0a67d6560f4ab01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
