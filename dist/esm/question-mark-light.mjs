export const name="question-mark-light";
export const id="dl_09d5a818ef524e1f8d9e";
export const url=new URL("../icons/question-mark-light.svg?v=a550051d85efc6c154cc398379d3052512c23f33fb983998b7142735321ae40a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
