export const name="japanese_flag-fill";
export const id="dl_662c82615fd148a19c96";
export const url=new URL("../icons/J/japanese_flag-fill.svg?v=4bc769786b81a6e19beceb136cd3730f658e9b2767e9f5afe6680f8ca6d01a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
