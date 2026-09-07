export const name="circle-minus";
export const id="dl_57b169ca0024429084d6";
export const url=new URL("../icons/close/circle-minus.svg?v=49ba52ea948b427124e89d5f343fbbc13beb792233ce4ad3bd7631ffe0e1edc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
