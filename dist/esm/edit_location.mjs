export const name="edit_location";
export const id="dl_04dd755e94d28c488c1f";
export const url=new URL("../icons/edit_location.svg?v=b05ab5e24f242a1c6e3eb3272d796fa0332f5f658e44759a575afe3c45770f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
