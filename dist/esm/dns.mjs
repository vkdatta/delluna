export const name="dns";
export const id="dl_9a062aa2e667169c1468";
export const url=new URL("../icons/dns.svg?v=abbbcf7c3f4014e5d71f2ac89601030827780f491d6ef454ba7ddb61ce2d8ed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
