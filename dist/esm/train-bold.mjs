export const name="train-bold";
export const id="dl_28fb2f9d1c270ad19f5f";
export const url=new URL("../icons/train-bold.svg?v=ab329e78149dce152e841385cb8f1247ba92f62a73ae4aeb75e1f52e5816aa04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
