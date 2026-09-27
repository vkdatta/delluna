export const name="pause";
export const id="dl_d2a403da52f04e20be8a";
export const url=new URL("../icons/pause.svg?v=a213ba34261681705753a3f4657ae91e20e17153489f6768bc833dbdb6f84f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
