export const name="bottom_panel_open";
export const id="dl_0c98e9b8ef348f995c8f";
export const url=new URL("../icons/bottom_panel_open.svg?v=c185eeb3578b66408920daf69626705c7c6f812ff12e9f5f03153958fc761ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
