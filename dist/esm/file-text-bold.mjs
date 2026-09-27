export const name="file-text-bold";
export const id="dl_d09734bff25d4d19bacd";
export const url=new URL("../icons/file-text-bold.svg?v=3b2c5b4edcc43a6fc065ff7ba68371a39add04fe72a3ee6402329152d1dc6fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
