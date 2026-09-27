export const name="lucid_1-book-user";
export const id="dl_4a0e580a7c904da8ab19";
export const url=new URL("../icons/lucid_1-book-user.svg?v=83337c78859e43945f655a8b6515b39551267f736538825fc1977c85141f206d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
