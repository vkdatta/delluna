export const name="thermometer-thin";
export const id="dl_5d9ca7a46eb705cebee7";
export const url=new URL("../icons/thermometer-thin.svg?v=d5a729259f1d533aed22612445b9380708d98585f7a7c4644ca44aae9cc829f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
