export const name="wand_stars-fill";
export const id="dl_d4bcb98c8e5e47ea9c20";
export const url=new URL("../icons/W/wand_stars-fill.svg?v=a5cc1afcab0457fcc44e59e839721f10d53d4d6305b7b4a502c5c31581e58d2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
