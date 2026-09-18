export const name="shield_moon";
export const id="dl_7923451792a34495941e";
export const url=new URL("../icons/S/shield_moon.svg?v=5ae0252799e421c354bb6d086710661fd1e48b966a2ee053a316c21cb1aeb98a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
