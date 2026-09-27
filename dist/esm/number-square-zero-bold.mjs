export const name="number-square-zero-bold";
export const id="dl_359b08f33ca148258d8a";
export const url=new URL("../icons/number-square-zero-bold.svg?v=674f2efdb0024ce46892f23b7aefb76ea9df81fb96a74a2afb5f90fff3ea88ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
