export const name="assignment_late";
export const id="dl_935326a15431cf82df5d";
export const url=new URL("../icons/assignment_late.svg?v=edfc1017fd26bddac0739603ec9084f40ac2dbb67325e46885da1742e5778911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
