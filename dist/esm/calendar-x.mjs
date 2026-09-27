export const name="calendar-x";
export const id="dl_d86c3fd6fe0441c6aa27";
export const url=new URL("../icons/calendar-x.svg?v=35305e0f1bd41221dc8b59b406e18accdca4bd979325339edbf5083be014669f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
