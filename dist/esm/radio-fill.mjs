export const name="radio-fill";
export const id="dl_d549ba0a754f4296af89";
export const url=new URL("../icons/radio-fill.svg?v=7dda166865035ef1b9f38e667b54ae65add809f0fba7791961290fd566b2c68c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
