export const name="record-thin";
export const id="dl_d12a6fc73fea473889fe";
export const url=new URL("../icons/record-thin.svg?v=309fc1543640a31d0d431b21686ba5956ecfe62dce78296b3d8823837f4b893f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
