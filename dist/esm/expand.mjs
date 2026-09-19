export const name="expand";
export const id="dl_4f89c8b9d9b5422084be";
export const url=new URL("../icons/del/expand.svg?v=58d281242f3aa4ebc12c69ef6e9d4ec47f88b055172edb50d6c238a0b06af4ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
