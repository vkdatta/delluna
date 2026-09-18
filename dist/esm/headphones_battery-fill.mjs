export const name="headphones_battery-fill";
export const id="dl_86dbb61b10d64013adfe";
export const url=new URL("../icons/headphones_battery-fill.svg?v=71e975eefd11545ed405d89e9566802a21473e37b0021f98527cab0c88248a2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
