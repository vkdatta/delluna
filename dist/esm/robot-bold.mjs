export const name="robot-bold";
export const id="dl_bf4edc78349e41839789";
export const url=new URL("../icons/robot-bold.svg?v=ee74f984670b8af7841b7dc90f3938d53ff2200a2ac806f4fefd76adb39082d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
