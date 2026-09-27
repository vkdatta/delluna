export const name="text-h-six";
export const id="dl_9b231c9c2804a5986fff";
export const url=new URL("../icons/text-h-six.svg?v=d4eb3492e8849f822d6e573ce8f84d2c79f565d779aa6ff1a7ca60dad7a31556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
