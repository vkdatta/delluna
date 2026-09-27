export const name="question-mark-light";
export const id="dl_09d5a818ef524e1f8d9e";
export const url=new URL("../icons/question-mark-light.svg?v=16127326d4c6edfef92a16f8a11210c3ca3304d8e9e81b5d37f8e703da1a1118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
