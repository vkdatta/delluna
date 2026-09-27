export const name="question-mark-thin";
export const id="dl_8787b10891e4432fb561";
export const url=new URL("../icons/question-mark-thin.svg?v=1facdf6102e21356cd53df4b978d29a85e8a9747bf96b841bc12b5d90a72bbed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
