export const name="start-fill";
export const id="dl_b8758fe6697e48e38c4a";
export const url=new URL("../icons/S/start-fill.svg?v=83db46f47b0174a728345cc2649fdfad127302a51b64628d3633ba971c83a31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
