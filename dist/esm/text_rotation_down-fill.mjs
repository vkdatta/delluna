export const name="text_rotation_down-fill";
export const id="dl_b9a06430a1e4caa10806";
export const url=new URL("../icons/text_rotation_down-fill.svg?v=6ecf457b934b9fd0420538694ffac6f3864905bf962d04cf3c929739d8e63786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
