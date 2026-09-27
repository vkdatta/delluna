export const name="8mp";
export const id="dl_7d77023ff43bb18fca03";
export const url=new URL("../icons/8mp.svg?v=fdc91784c6327ae1ea90bbd5144c8ee36b1a1fc258babf53a93b4ccf4394c40b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
