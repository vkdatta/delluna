export const name="disc_full-fill";
export const id="dl_0e7b7635dfa846130304";
export const url=new URL("../icons/disc_full-fill.svg?v=c19611d7d7d01d7db1068a7b3f28eb8ad3884c8c8669afc272cd564833ba7113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
