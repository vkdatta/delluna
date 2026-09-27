export const name="lucid_2-house-wifi";
export const id="dl_4d1f708ec83547e1aa6a";
export const url=new URL("../icons/lucid_2-house-wifi.svg?v=3f0ffd20dcd74a5825098fa8002d18658fbb6403d7831a3db16e22a5143e2a73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
