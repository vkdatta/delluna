export const name="line_end_arrow";
export const id="dl_d775047ebd21adb97596";
export const url=new URL("../icons/line_end_arrow.svg?v=095fae1399a4fd3471360a5d86cadbd4f0a6ad4ff4905fba9dea35419c3d2a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
