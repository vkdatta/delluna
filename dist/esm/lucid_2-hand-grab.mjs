export const name="lucid_2-hand-grab";
export const id="dl_3da1836884484263b10a";
export const url=new URL("../icons/lucid_2-hand-grab.svg?v=7375a8a05b5d37dc04c2c9ace937732d86448b0ad99ac73c8d42f75f2c703ecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
