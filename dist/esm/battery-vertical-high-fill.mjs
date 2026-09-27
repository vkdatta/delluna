export const name="battery-vertical-high-fill";
export const id="dl_d72f00cd111a44f2a515";
export const url=new URL("../icons/battery-vertical-high-fill.svg?v=216d53773b09f47bce6edb844d2fa23673eb4dee84cb19469a44c99e00ff8b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
