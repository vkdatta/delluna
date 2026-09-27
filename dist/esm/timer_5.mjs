export const name="timer_5";
export const id="dl_91eab41636bd9d7ee029";
export const url=new URL("../icons/timer_5.svg?v=aaa19f6e735cbe52141224fbe2b3d4e80ab1db5333b3346638f770ad0295d91c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
