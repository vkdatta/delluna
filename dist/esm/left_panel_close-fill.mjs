export const name="left_panel_close-fill";
export const id="dl_fdff95723c6c82e188c7";
export const url=new URL("../icons/left_panel_close-fill.svg?v=3ab10ce63552edb722338c95dabb193df73cf8ef3a74566c2538861d13c7e7d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
