export const name="google-play-logo-fill";
export const id="dl_b488bca29f3b4d64b360";
export const url=new URL("../icons/google-play-logo-fill.svg?v=013741ad429ecbdfca0b73686a535a0e12b4b045d328d70d5fc405daa687675d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
