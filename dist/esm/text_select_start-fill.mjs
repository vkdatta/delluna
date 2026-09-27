export const name="text_select_start-fill";
export const id="dl_de815efa8da5ff191a53";
export const url=new URL("../icons/text_select_start-fill.svg?v=412f3d33cf92680b1b8eff1aa8bd41e15c66fd28757cc929eaec9cf208e50807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
