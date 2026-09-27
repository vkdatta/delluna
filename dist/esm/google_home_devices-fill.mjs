export const name="google_home_devices-fill";
export const id="dl_21f189461b704b4bdc8c";
export const url=new URL("../icons/google_home_devices-fill.svg?v=8bd4dc9d3732a248be795a96e55a9d10d86e0116fd4a315f904a9261d914a1f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
