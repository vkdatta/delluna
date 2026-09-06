export const name="calendar-check-bold";
export const id="dl_a02657fcf3f44239af16";
export const url=new URL("../icons/calendar-check-bold.svg?v=58fca39d6559095aa20c783629c01d6d3220d7694c5ef98ea6ca7f631544a99f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
