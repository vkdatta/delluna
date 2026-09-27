export const name="forum";
export const id="dl_07bb04b832a413a0efb8";
export const url=new URL("../icons/forum.svg?v=f2ac9728a1d6bfae6f74c94fb0777628eb7d7b2c9e0ba303e99a68d8d69cde46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
