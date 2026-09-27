export const name="watch_button_press";
export const id="dl_07d7a097e78244e10e88";
export const url=new URL("../icons/watch_button_press.svg?v=0a1f45ed6b213aec3eac2a996bc855f0f5ee68fd697964804943db521d1bef8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
