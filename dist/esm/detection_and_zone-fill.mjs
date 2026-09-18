export const name="detection_and_zone-fill";
export const id="dl_1de7e2866f2641049e7a";
export const url=new URL("../icons/detection_and_zone-fill.svg?v=81e3f5fbe503ab73f784aef51074fedbbdfcb733c4592e517837407964bc7ce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
