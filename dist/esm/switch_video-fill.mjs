export const name="switch_video-fill";
export const id="dl_339c6ecef99c49caafa8";
export const url=new URL("../icons/S/switch_video-fill.svg?v=c91947caf8f4a0fa0d77e5dae2a188c8efaec6fda67ae3a5243b91dcdf6fa044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
