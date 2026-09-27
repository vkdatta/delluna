export const name="unite-bold";
export const id="dl_82ced9aade56743d0d48";
export const url=new URL("../icons/unite-bold.svg?v=745557a5dd05b2d4b4de1c11c2c4707af2e623bcd961b0bf9ecd6c2c64b4b462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
