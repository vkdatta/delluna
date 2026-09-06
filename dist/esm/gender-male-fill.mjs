export const name="gender-male-fill";
export const id="dl_a96cf08e41924b778d06";
export const url=new URL("../icons/gender-male-fill.svg?v=d2c5f8cbf69046947228ee20f52c8161c875905e727b38a966d9dc0076a7da0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
