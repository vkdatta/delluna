export const name="battery-charging-vertical-thin";
export const id="dl_f612daad4ac147ca883f";
export const url=new URL("../icons/battery-charging-vertical-thin.svg?v=595d40a67fa8c13461013a1eaefa503ff826968a1a1d6c85bc9348928d3df219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
