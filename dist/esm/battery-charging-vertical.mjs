export const name="battery-charging-vertical";
export const id="dl_8780c13795364063aef7";
export const url=new URL("../icons/battery-charging-vertical.svg?v=05657e76d63295f7589adc2aeadfb7bad877434f5ba6f68e2b10aa3a77235b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
