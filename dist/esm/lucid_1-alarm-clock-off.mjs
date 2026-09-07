export const name="lucid_1-alarm-clock-off";
export const id="dl_cdace504fbb4401fafbd";
export const url=new URL("../icons/lucid_1-alarm-clock-off.svg?v=801c8894d3f20d8c9c433a31cb2b61e1e4b4964c8b16bd453adefdd0eceae990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
