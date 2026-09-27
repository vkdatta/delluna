export const name="task_alt-fill";
export const id="dl_785767cdf913daaf148d";
export const url=new URL("../icons/task_alt-fill.svg?v=07e90f4f4070e5752ed762cf0e679bf5505e60b035c507b54a9a5a50ad772be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
