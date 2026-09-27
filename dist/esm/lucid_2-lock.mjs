export const name="lucid_2-lock";
export const id="dl_a65d9ca60b2f4542a958";
export const url=new URL("../icons/lucid_2-lock.svg?v=434cb42aadc69b70deb51ea575309bd5c5abfd6f9face53a3b187d8ea4ada0e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
