export const name="battery-charging-vertical-fill";
export const id="dl_f2de4d0314e848b4b304";
export const url=new URL("../icons/battery-charging-vertical-fill.svg?v=a5f7fea0f4d2a424078127a22bf55382734c233beb7388c640f745cab7fd4bb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
