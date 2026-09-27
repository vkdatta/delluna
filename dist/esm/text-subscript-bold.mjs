export const name="text-subscript-bold";
export const id="dl_dbcee1411bc6b5ddd6a7";
export const url=new URL("../icons/text-subscript-bold.svg?v=44018e173fda4b3ea611afa29474837c192537155ded7c6e81377ba87e52e7ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
