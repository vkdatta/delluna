export const name="lucid_1-biceps-flexed";
export const id="dl_b3d6e2ece22a4ea1a31d";
export const url=new URL("../icons/lucid_1-biceps-flexed.svg?v=483b6484f2325ac1a39f80b3612432c0115b0e3ce8f745dbb65872d2060bcc5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
