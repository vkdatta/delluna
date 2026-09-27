export const name="coffee-bean-duotone";
export const id="dl_c58c48c9041d4aff953b";
export const url=new URL("../icons/coffee-bean-duotone.svg?v=d768cff233c98197336bc3446bca09bdb5bb407518cfb31bf3f3551b7bf7bab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
