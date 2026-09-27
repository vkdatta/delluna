export const name="clock_loader_20-fill";
export const id="dl_103f588cb6b6efdee084";
export const url=new URL("../icons/clock_loader_20-fill.svg?v=fbeee74ecdbf48893051db18e1a542781fd0838af7f3b8a8c359625618c556b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
