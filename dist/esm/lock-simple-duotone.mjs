export const name="lock-simple-duotone";
export const id="dl_4275c921040247b9912c";
export const url=new URL("../icons/lock-simple-duotone.svg?v=bd5f1b790f659868dd4bf6459d2550f5c936f14753a7b9e2c392e94d7bcd0e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
