export const name="pen_size_4-fill";
export const id="dl_f5e1a4a8277fd670ba92";
export const url=new URL("../icons/pen_size_4-fill.svg?v=9ce95b25a227592e3307847b820e2f8b2315d7231f3af18b345a729749356c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
