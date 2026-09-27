export const name="notches";
export const id="dl_07d445fe52a348aeb630";
export const url=new URL("../icons/notches.svg?v=5698d0fad7978fead95e28b4ecc4ef8cc31c0a1aa38c7d337013a3f4dab7c548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
