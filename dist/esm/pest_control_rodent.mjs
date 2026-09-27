export const name="pest_control_rodent";
export const id="dl_c071d7893f1caffe6fb7";
export const url=new URL("../icons/pest_control_rodent.svg?v=618c655cb22d89451c6b8c4cf944697787a06db06dd71b74ebba275727c1ae01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
