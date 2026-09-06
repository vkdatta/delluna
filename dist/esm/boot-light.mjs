export const name="boot-light";
export const id="dl_f06a486e4e604d8ab73f";
export const url=new URL("../icons/boot-light.svg?v=fe343cb27ce45759f8a8b0fe24fa196cff0a8b0acd0a000dbb84d0c926753245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
