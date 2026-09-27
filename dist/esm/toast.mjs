export const name="toast";
export const id="dl_223ff1642ff721d8a242";
export const url=new URL("../icons/toast.svg?v=6b13576342c05225a48021f1ae865a4247a2246cd8303b587af2b0b87cec7ea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
