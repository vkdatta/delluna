export const name="lucid_1-a-arrow-up";
export const id="dl_6fb48c67f61745958978";
export const url=new URL("../icons/lucid_1-a-arrow-up.svg?v=88cb6eaa4b2af70786506d0e8c2e42c617dd438667b0cae484d9d33af8fb1bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
