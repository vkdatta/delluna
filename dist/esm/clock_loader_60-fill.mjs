export const name="clock_loader_60-fill";
export const id="dl_d7bc424fd9a076e01ddf";
export const url=new URL("../icons/clock_loader_60-fill.svg?v=5a7a8559cf582aacdceb31ba6965c9611835c9ff0b9f163ea72cf567c2027996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
