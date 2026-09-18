export const name="touch_double";
export const id="dl_ce9d6fd1f8c145c1b565";
export const url=new URL("../icons/T/touch_double.svg?v=fa1e9f003e5a656c4ff2457a8ed0ca96b3013fd8a90b869a0f6dad24965dbc52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
