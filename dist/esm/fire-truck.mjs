export const name="fire-truck";
export const id="dl_2ff1b344baa6424185c8";
export const url=new URL("../icons/fire-truck.svg?v=ed37faae37cee8db5e815495b659c450a8cc6e73e7dcba0ad2f3fc199b05fe45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
