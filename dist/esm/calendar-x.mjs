export const name="calendar-x";
export const id="dl_d86c3fd6fe0441c6aa27";
export const url=new URL("../icons/calendar-x.svg?v=a3b78a668a195b1b9e7d42c080650e508d3c851645c0752e1795a094bd7fb169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
