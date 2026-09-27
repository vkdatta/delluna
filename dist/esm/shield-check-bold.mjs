export const name="shield-check-bold";
export const id="dl_d2b9ea4f9da1bcc1d1b3";
export const url=new URL("../icons/shield-check-bold.svg?v=8853d791a379821033dedf1a059d0eb0ae4efe9851e799bc0aec31338c135867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
