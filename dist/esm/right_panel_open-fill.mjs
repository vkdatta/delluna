export const name="right_panel_open-fill";
export const id="dl_bd728da09858bc5a1fb6";
export const url=new URL("../icons/right_panel_open-fill.svg?v=eb225c2a451f3ce0ddacfe3d734b69ef3b9558d3bb88539636ba96d430b492b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
