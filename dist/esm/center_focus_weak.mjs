export const name="center_focus_weak";
export const id="dl_9fdf4d95d9cfd248ea07";
export const url=new URL("../icons/center_focus_weak.svg?v=0a398748159383d6bf30cd3cd5e957ace14cf9a636a119cb22567bf6a6b840f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
