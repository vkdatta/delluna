export const name="thermometer-cold-thin";
export const id="dl_eb883c171a486bf327f5";
export const url=new URL("../icons/thermometer-cold-thin.svg?v=5880dbf4a403a3e7fc98882ba951dd262eb1bdb6736671199e0ba31e67a9215e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
