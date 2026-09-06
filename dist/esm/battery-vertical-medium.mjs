export const name="battery-vertical-medium";
export const id="dl_3776d2ed125b488484cb";
export const url=new URL("../icons/battery-vertical-medium.svg?v=01c42132dac3b408207189deecd468d15c0df6169fe1c91f19169a34b7648007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
