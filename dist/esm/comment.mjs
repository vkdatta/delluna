export const name="comment";
export const id="dl_56e195102f35fad682b0";
export const url=new URL("../icons/comment.svg?v=5be54a3a11193c2563aa1c432dda5492dac179f6e146351e62af4b8b07fe6447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
