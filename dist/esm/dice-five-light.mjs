export const name="dice-five-light";
export const id="dl_5ace5a16efe1496eaa94";
export const url=new URL("../icons/dice-five-light.svg?v=88f2a3edf55bef8e4e8aef69593e967c21b4bd794fb67916eaeaaaae45e556a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
