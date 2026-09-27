export const name="empty_dashboard-fill";
export const id="dl_2eb615c937e86c93f3d6";
export const url=new URL("../icons/empty_dashboard-fill.svg?v=27c17ab6e66ff2daa13623a3a263c25c52d4ce56af45a9d3cfebe60aa032ab3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
