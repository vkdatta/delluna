export const name="battery-vertical-high-thin";
export const id="dl_49af5d19c95d4508974d";
export const url=new URL("../icons/battery-vertical-high-thin.svg?v=81ceb4f5d3e5f77ada071686eda829fcaa7dcfc9d333a1888769b823ddc0c9ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
