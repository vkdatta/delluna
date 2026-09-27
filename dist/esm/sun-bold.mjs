export const name="sun-bold";
export const id="dl_c5b0ec4649ea469d2c25";
export const url=new URL("../icons/sun-bold.svg?v=4a10b8c933b8fcab2ccf2d08208b1152bf3654b18684e08667114347d988f713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
