export const name="task_alt";
export const id="dl_65a8b7016772daa3131e";
export const url=new URL("../icons/task_alt.svg?v=c46eb5218a2bd930aa515f708b74e47bd66a7af41a6b8a55fe6181788816ed98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
