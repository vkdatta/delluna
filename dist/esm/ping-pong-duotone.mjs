export const name="ping-pong-duotone";
export const id="dl_43c5b2428ac740c0930d";
export const url=new URL("../icons/ping-pong-duotone.svg?v=a2564122637854d71e20bd05eb16c05ec94b4b444fc5e8bfb6f94d58cc86ed47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
