export const name="left_panel_open";
export const id="dl_589ce20e1356b432d406";
export const url=new URL("../icons/left_panel_open.svg?v=d1884ec089340187fefb8dedd7c40fd88beec99c4a8a3c84b70ca4fbc5dea7ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
