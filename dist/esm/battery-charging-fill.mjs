export const name="battery-charging-fill";
export const id="dl_3ae2a5afff3e4e4abbee";
export const url=new URL("../icons/battery-charging-fill.svg?v=2058ba9e2e7fb114f03e326a6db914aaa2aa711db27ed2160e1aa4e8db616327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
