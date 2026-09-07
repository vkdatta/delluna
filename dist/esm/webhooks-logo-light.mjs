export const name="webhooks-logo-light";
export const id="dl_08967e3f749e49ba9483";
export const url=new URL("../icons/W/webhooks-logo-light.svg?v=c802cb0d9c5617abb8111012f41d42785f1b4748ec0832423fd4849f58553128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
