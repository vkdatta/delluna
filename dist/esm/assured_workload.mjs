export const name="assured_workload";
export const id="dl_0500e8d61f3ac6b73294";
export const url=new URL("../icons/assured_workload.svg?v=4e312368ec9b2617c0261f8254110ca0c07e7343b49ab79e17af2ab97ab2b820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
