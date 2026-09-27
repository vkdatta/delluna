export const name="right_panel_open-fill";
export const id="dl_4d87f7815e492beacdca";
export const url=new URL("../icons/right_panel_open-fill.svg?v=83308d8bf22a4b62264e4c5250b20d38706e489120eab5d49898e620eef29747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
