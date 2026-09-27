export const name="lucid_3-monitor-off";
export const id="dl_66f21ad6132846a38e0f";
export const url=new URL("../icons/lucid_3-monitor-off.svg?v=f7f9ab744b001c2ffe357a7cec2eab69323b84114a9fac2d1e531c2a47a10bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
