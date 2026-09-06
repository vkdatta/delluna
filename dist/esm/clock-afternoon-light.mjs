export const name="clock-afternoon-light";
export const id="dl_29d23494d4f242b5a347";
export const url=new URL("../icons/clock-afternoon-light.svg?v=b953bf262db258d1631a41f91a916a50430fb65f62f69e63bafd3d3908ef1052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
