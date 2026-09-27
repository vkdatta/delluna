export const name="task_alt";
export const id="dl_06fd34fdac791345fb9b";
export const url=new URL("../icons/task_alt.svg?v=aaa6fb2076e563073778e6d23bf22a0b70af9ea994835f5960a595633af985da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
