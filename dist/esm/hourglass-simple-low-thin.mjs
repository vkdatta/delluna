export const name="hourglass-simple-low-thin";
export const id="dl_fe2dd3278c02464bbca3";
export const url=new URL("../icons/hourglass-simple-low-thin.svg?v=3e326025e58786bf3e91db617b6b3ad708a6e8c348f074da447de7800cad9b5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
