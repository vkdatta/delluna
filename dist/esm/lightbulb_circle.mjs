export const name="lightbulb_circle";
export const id="dl_e343adb67be6492bb0b3";
export const url=new URL("../icons/L/lightbulb_circle.svg?v=e4070fab7299f96a380ce7c8b238b0b5c79558b1966fbf167732b96e9b043d1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
