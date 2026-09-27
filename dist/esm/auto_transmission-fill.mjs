export const name="auto_transmission-fill";
export const id="dl_fa3c8f57ca7018314f05";
export const url=new URL("../icons/auto_transmission-fill.svg?v=60961f5bd156289532652c02e27f5cb9e2830df798e5acdcd149ef99bc3aba6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
