export const name="calendar-blank-bold";
export const id="dl_2af1bd0e4a6f4609acfb";
export const url=new URL("../icons/calendar-blank-bold.svg?v=b1810f33cc157cdedc4d7839da20c88958ed04cb4e32dccabc8a02fd18b79769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
