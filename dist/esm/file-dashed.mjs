export const name="file-dashed";
export const id="dl_4ec3306f2bf145f59584";
export const url=new URL("../icons/file-dashed.svg?v=6c2cc1bc65bcb5c4adae0749a9d442c8ea19f75ede4684ab37d7e7147637d5ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
