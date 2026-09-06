export const name="battery-charging-vertical-thin";
export const id="dl_f612daad4ac147ca883f";
export const url=new URL("../icons/battery-charging-vertical-thin.svg?v=67f370b536483d145f144010ac7f52ff65cd28fe2eb5f8eb646f7dcba7e680f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
