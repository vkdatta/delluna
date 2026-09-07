export const name="thermometer-cold-duotone";
export const id="dl_8217b84fcebf43779e83";
export const url=new URL("../icons/T/thermometer-cold-duotone.svg?v=63e698dd603992bb807d69cb769060ebec6137c54d200df21fc8b558adb23b8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
