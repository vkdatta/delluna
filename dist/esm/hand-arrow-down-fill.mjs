export const name="hand-arrow-down-fill";
export const id="dl_652fe90f134b4e81827a";
export const url=new URL("../icons/hand-arrow-down-fill.svg?v=9f10a058708962f7aeeb823a260ead995b7a84f567afa893dbae84631b10a927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
