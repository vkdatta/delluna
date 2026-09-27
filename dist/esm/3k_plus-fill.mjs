export const name="3k_plus-fill";
export const id="dl_f44d17aadf219af273e2";
export const url=new URL("../icons/3k_plus-fill.svg?v=479f1c20fcbad124a9019105c96a938458302a50145e9e89be39f44838197c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
