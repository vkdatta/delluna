export const name="battery-charging-vertical";
export const id="dl_8780c13795364063aef7";
export const url=new URL("../icons/battery-charging-vertical.svg?v=5a0d3d21fed01b07c377bbbd32c115186713575c060acd838d51eab65fb194fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
