export const name="shield";
export const id="dl_1913855f0e642d240fed";
export const url=new URL("../icons/shield.svg?v=a041743cc67b5e3237379b0e687decfdfde147f2b19f0fb750e42ef3ff729c9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
