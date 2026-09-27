export const name="invert_colors-fill";
export const id="dl_db51b76fd381f2975864";
export const url=new URL("../icons/invert_colors-fill.svg?v=0002dd6dd63fa82ae998154170cbff0af486b9e3a11ff0c92dddd9a281047085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
