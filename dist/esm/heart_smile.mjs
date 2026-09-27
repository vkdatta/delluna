export const name="heart_smile";
export const id="dl_bde16257d81dbe2dee34";
export const url=new URL("../icons/heart_smile.svg?v=61331e43c05c1c93c28f58829945ac7599c045b73864f09752efb38c8cdb553d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
