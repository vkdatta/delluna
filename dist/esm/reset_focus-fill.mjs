export const name="reset_focus-fill";
export const id="dl_eef12c2aa1da6b912759";
export const url=new URL("../icons/reset_focus-fill.svg?v=f2bd90d348421f09be65e3670c448a16c96c446f88146b79052b4568d0a3b128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
