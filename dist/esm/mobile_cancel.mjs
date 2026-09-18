export const name="mobile_cancel";
export const id="dl_93ccae06c9d646638e1a";
export const url=new URL("../icons/M/mobile_cancel.svg?v=0f4d877706aae84a5662b424dbce7ca3ae57aa96e61b96056d504476ec1c3763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
