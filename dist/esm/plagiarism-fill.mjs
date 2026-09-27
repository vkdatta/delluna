export const name="plagiarism-fill";
export const id="dl_f11f910004c7e7e94127";
export const url=new URL("../icons/plagiarism-fill.svg?v=e10d908e9f27e35004eb1a6f1b967fbd17d1bfce59cf6535554b634a7672c300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
