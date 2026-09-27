export const name="avc-fill";
export const id="dl_6d3b5bcdedfd34ff5104";
export const url=new URL("../icons/avc-fill.svg?v=66bea9e37b4472a361ddf7d8a662c8b7c51af17cb841eba715ee07bed1fb5bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
