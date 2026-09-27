export const name="text_decrease-fill";
export const id="dl_6095ac220336fec0e8da";
export const url=new URL("../icons/text_decrease-fill.svg?v=3097c8233abe81029f96edb6025ade882ab72148559ac1d11715d48e6f25e7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
