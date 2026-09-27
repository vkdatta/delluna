export const name="steering_wheel_cool";
export const id="dl_07976c32d5fa7f28f481";
export const url=new URL("../icons/steering_wheel_cool.svg?v=89329d934545d4a58555ec3a879ce63eb26a0951aae42c7791782ed01b8d91f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
