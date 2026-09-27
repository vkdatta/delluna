export const name="humidity_low-fill";
export const id="dl_4ebe7ee53ae5ead5099d";
export const url=new URL("../icons/humidity_low-fill.svg?v=90cbd7b9890c50d7f27a9f2a8a7e2759ad7255434cf4786a1314f4abafb4d375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
