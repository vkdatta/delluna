export const name="airplane-takeoff-fill";
export const id="dl_fbe14ba5a69c4c7da283";
export const url=new URL("../icons/airplane-takeoff-fill.svg?v=3e44b6b736da99ab0af3bb247fa2c9c75341dd7562a84c3caf4f1a2d81bd65c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
