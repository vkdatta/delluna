export const name="arming_countdown";
export const id="dl_7e48f5479eda4e9b8d33";
export const url=new URL("../icons/arming_countdown.svg?v=4ee3aa3ba15186dc06b98b46bfd9f66ff0f33f1471bd7b4d92c3fa7a7f414874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
