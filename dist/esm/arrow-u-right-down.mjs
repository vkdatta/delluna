export const name="arrow-u-right-down";
export const id="dl_708a6b5d06fb4620ab87";
export const url=new URL("../icons/arrow-u-right-down.svg?v=61ca4bb43455185c95eeccc87f12c319ca3f321c41e8b07af7e1d40591c2e107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
