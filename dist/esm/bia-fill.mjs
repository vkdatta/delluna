export const name="bia-fill";
export const id="dl_65299316d656ac187e02";
export const url=new URL("../icons/bia-fill.svg?v=21e9d80895c1137b8204cb72b13286a8957ac08ac84847334cff46adc3ddf82d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
