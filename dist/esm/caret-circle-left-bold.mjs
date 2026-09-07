export const name="caret-circle-left-bold";
export const id="dl_5948d870ec80479ab8fb";
export const url=new URL("../icons/caret-circle-left-bold.svg?v=41baeff12d3ecdc6b11bb0678767edea8797b9fb5907cf8f961eca0fc2bed4b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
