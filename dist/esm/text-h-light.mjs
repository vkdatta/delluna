export const name="text-h-light";
export const id="dl_4b88f90468bb439091bb";
export const url=new URL("../icons/T/text-h-light.svg?v=044eee9d32bfb9149b6f80ddcfd80ea07b71a96284fc0ba506987fcf89928bb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
