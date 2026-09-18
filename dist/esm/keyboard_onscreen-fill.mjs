export const name="keyboard_onscreen-fill";
export const id="dl_51959bc7b3484d8c84a3";
export const url=new URL("../icons/keyboard_onscreen-fill.svg?v=b5328cc276732a8105caccb971c69a99b40aeea5f47b14fab4e171d58c3f6073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
