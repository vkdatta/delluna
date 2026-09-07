export const name="tray-arrow-up-fill";
export const id="dl_cc0eb5a64c4f44b7b8de";
export const url=new URL("../icons/T/tray-arrow-up-fill.svg?v=ea1c2639ad58d33b49513d6684b84ccc7d75e0d28ee0375444c0e94745aafce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
