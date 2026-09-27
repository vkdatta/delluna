export const name="diagnosis";
export const id="dl_d0b309a0eba080e01f73";
export const url=new URL("../icons/diagnosis.svg?v=37323031a4631ed89329cc331859722b27b1e32137c505657727fc802d96de36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
