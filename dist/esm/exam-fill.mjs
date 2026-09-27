export const name="exam-fill";
export const id="dl_86ea817d1f314406af87";
export const url=new URL("../icons/exam-fill.svg?v=7a75091972a890bfa094102df06e67955b22cc5e16ed3ca1c7d99431cbb876bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
