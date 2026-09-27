export const name="mosque";
export const id="dl_b36c77d801814123907b";
export const url=new URL("../icons/mosque.svg?v=cad574f068aaa41fc65a4caf89160e683b8d776dce8833dbf17902405e426c68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
