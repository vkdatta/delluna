export const name="wheelchair-motion-bold";
export const id="dl_9c9eee23a2d0f6bd43da";
export const url=new URL("../icons/wheelchair-motion-bold.svg?v=fa1432de199eac5b27a5415f86ef9f58cd358e33848f927d1d1c222a3ea41249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
