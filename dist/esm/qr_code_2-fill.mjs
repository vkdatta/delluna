export const name="qr_code_2-fill";
export const id="dl_e8000074d06dc667d574";
export const url=new URL("../icons/qr_code_2-fill.svg?v=730a166155b72ad6e0c88bb738c5f7f1b65ce7ec9da38f645849771bfed0b1b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
