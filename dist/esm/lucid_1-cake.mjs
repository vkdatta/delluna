export const name="lucid_1-cake";
export const id="dl_4953a25b994a44828324";
export const url=new URL("../icons/lucid_1-cake.svg?v=a978aad71783cbae20b9cd538a609a341d5cdf0ff4e6993cd6db0c55ab4a34df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
