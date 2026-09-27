export const name="view_comfy-fill";
export const id="dl_8915e660d823b4c85c97";
export const url=new URL("../icons/view_comfy-fill.svg?v=9694bf2c42bd276775953b35123561fc8b224ef905bf74a0e123d7302523b795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
