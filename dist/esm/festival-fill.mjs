export const name="festival-fill";
export const id="dl_b6dc5573ba6e52fe4b27";
export const url=new URL("../icons/festival-fill.svg?v=1b87cea5a44931f7a007214ed52fc3f6566a79f05ff09170010424c0c49e433d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
