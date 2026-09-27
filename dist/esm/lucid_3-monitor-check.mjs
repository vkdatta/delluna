export const name="lucid_3-monitor-check";
export const id="dl_137a265fdf0947c7b059";
export const url=new URL("../icons/lucid_3-monitor-check.svg?v=d62969e3e2efdb617abd5e1c22f6725bbb84fc94816b83b692529748847228b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
