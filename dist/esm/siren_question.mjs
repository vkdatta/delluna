export const name="siren_question";
export const id="dl_01ffbf34527a7f6337cb";
export const url=new URL("../icons/siren_question.svg?v=0beb90e4b169c3157736c3d17b5ae9a30357ab52001b63225013b4d3f2b94805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
