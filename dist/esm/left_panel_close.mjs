export const name="left_panel_close";
export const id="dl_5a195a9f389f107b1a44";
export const url=new URL("../icons/left_panel_close.svg?v=04f84b5fc3eea639556fe539a3b90c55cba00fa17f4f9c10a506cf6e535025b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
