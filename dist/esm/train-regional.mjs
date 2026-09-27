export const name="train-regional";
export const id="dl_607cb539945da3172885";
export const url=new URL("../icons/train-regional.svg?v=e012cd1e6646dd6b840a75a9ca0b51b6accc844aa18eac776c235972db16e42d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
