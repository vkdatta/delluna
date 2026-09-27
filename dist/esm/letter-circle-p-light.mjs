export const name="letter-circle-p-light";
export const id="dl_5b223545de244b04ada5";
export const url=new URL("../icons/letter-circle-p-light.svg?v=c4b98346e8fb3d5f738593247ac32afb767e3081de071916cba52338c7be9045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
