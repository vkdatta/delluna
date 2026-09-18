export const name="tools_ladder-fill";
export const id="dl_a54d69404b614efd8be4";
export const url=new URL("../icons/T/tools_ladder-fill.svg?v=91c5594158b4ebe1b623865650431669e550c684b735535ea0f98b03fdbca51c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
