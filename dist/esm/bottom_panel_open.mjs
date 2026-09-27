export const name="bottom_panel_open";
export const id="dl_80fb6bda2fac69905154";
export const url=new URL("../icons/bottom_panel_open.svg?v=2651be152bba6ea87ace3d55b17e3054cc67e79f27d238dd2ed1ef5ea25bb356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
