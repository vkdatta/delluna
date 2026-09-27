export const name="wash";
export const id="dl_50a0d8788c96055b5a1d";
export const url=new URL("../icons/wash.svg?v=9d25a5461a697cfb2bad2b3726fe5c2c815c58073d244dd2a0cb5a8d9bff7142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
