export const name="play_disabled";
export const id="dl_21c0b303d0d57eaa949c";
export const url=new URL("../icons/play_disabled.svg?v=336a3b0a0c89e12c80f2b900526fb0981a87cd59bdeda44b21ad5bc6d65f9efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
