export const name="battery-charging-vertical-thin";
export const id="dl_f612daad4ac147ca883f";
export const url=new URL("../icons/battery-charging-vertical-thin.svg?v=9d71323cae126580412c68cd3fc6ce71a6cca71ffa00eb593f41e91b64d2d0d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
