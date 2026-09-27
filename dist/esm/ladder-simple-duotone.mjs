export const name="ladder-simple-duotone";
export const id="dl_2e36bcc7e28d46019b06";
export const url=new URL("../icons/ladder-simple-duotone.svg?v=4012d4f7e1e6a779466c5a1bdad43d7c6d70753fe4e2af2b9cd2d70566c678f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
