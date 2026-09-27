export const name="digital_wellbeing-fill";
export const id="dl_9a92d9af99a057c9beee";
export const url=new URL("../icons/digital_wellbeing-fill.svg?v=f037487108f2c5ef5386fd8fa51c99bee2dfafdc8a8761ac5d96adcd133ca6c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
