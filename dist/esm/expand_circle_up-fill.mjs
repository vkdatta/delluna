export const name="expand_circle_up-fill";
export const id="dl_f8d11b659fcc47d08605";
export const url=new URL("../icons/expand_circle_up-fill.svg?v=17f9d32f83dd325d9126e446846b218c8b79d24de1e573f47acc5845ea2f1be6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
