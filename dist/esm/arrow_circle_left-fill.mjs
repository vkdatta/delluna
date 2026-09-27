export const name="arrow_circle_left-fill";
export const id="dl_28be913c4de4cdd86f8d";
export const url=new URL("../icons/arrow_circle_left-fill.svg?v=e10e11f78b06447c7f1d95e95f0cf3bc0cb4fd79023575b1591b60fa883ba1ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
