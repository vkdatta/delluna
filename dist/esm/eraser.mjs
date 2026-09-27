export const name="eraser";
export const id="dl_f066ee01b0344e3481b0";
export const url=new URL("../icons/eraser.svg?v=91d895afd00a6e635536dd83aaec373ca3a157ad0ffb26587590a183d6036449",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
