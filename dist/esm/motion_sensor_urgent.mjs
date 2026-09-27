export const name="motion_sensor_urgent";
export const id="dl_a3afa347cf7472ca3289";
export const url=new URL("../icons/motion_sensor_urgent.svg?v=2ceffd9f42f5ee41652d20bcaef7a51a1c18d62df51de0b443e7091de9cee45e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
