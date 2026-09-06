export const name="arrows-out-line-horizontal-light";
export const id="dl_d5a099a0580e42ec8134";
export const url=new URL("../icons/arrows-out-line-horizontal-light.svg?v=5cb6c01dc47923278c7b6d9c0b9b6b4359a9f90939cb2b38f50d6e440d78000d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
