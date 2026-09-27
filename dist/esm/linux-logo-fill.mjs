export const name="linux-logo-fill";
export const id="dl_29d37238d2fb4c3e952d";
export const url=new URL("../icons/linux-logo-fill.svg?v=7956acc640161e497249bac589dfeb99fdf6ec5c85b3639662cdc29a47fd392a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
