export const name="linktree-logo-bold";
export const id="dl_847fa745eb924802badf";
export const url=new URL("../icons/linktree-logo-bold.svg?v=e0acc7d1c5cac30c034d0c64aa7cd1a147ef89a6f3d8a0f39922e1364790088e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
