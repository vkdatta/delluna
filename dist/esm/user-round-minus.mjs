export const name="user-round-minus";
export const id="dl_8eb816fcad7c4a9c9ea1";
export const url=new URL("../icons/user-round-minus.svg?v=b83314c4f3c7f5ef8bcb5e8f3535b8286b723a0f59a9e79dbaa76c5cbabcf381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
