export const name="nest_wake_on_press-fill";
export const id="dl_413bebb007c5feccfbdf";
export const url=new URL("../icons/nest_wake_on_press-fill.svg?v=5a9e2924eb792420af2730e1347358a3e428b1d2d28cbaa1a3f3fb550f6bb217",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
