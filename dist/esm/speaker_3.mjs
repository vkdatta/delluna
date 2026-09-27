export const name="speaker_3";
export const id="dl_eb3bc6a3e2a9b86dd14b";
export const url=new URL("../icons/speaker_3.svg?v=4c5fb6cee82fcd0fda8a420dc4cf321465b336d18d9dab1b84a6ea4040cce075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
