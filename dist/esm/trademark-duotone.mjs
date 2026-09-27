export const name="trademark-duotone";
export const id="dl_0b102e2f121d4a71dfe2";
export const url=new URL("../icons/trademark-duotone.svg?v=e27e76de07a2f7670032816a212989915d2e11e997f816f6056d5dab61f6e648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
