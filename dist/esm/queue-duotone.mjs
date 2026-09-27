export const name="queue-duotone";
export const id="dl_0dd4d70765574a0fb9de";
export const url=new URL("../icons/queue-duotone.svg?v=39799908eef1086d1712abf8c38ab0ad823141e2c018f9710348c6143cdf373e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
