export const name="stamp-bold";
export const id="dl_25a250ec589d41508fde";
export const url=new URL("../icons/S/stamp-bold.svg?v=340f58ad7f6b9044fcb51809f74d3a917355860a7cf084d70ea6f7205c2cf3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
