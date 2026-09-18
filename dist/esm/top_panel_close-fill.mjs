export const name="top_panel_close-fill";
export const id="dl_58121e3df69244f58b13";
export const url=new URL("../icons/T/top_panel_close-fill.svg?v=77487f2c3b211727eec8644b40bf485e3217e6180bbf4061bef1bca8e3935c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
