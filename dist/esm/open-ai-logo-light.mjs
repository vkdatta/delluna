export const name="open-ai-logo-light";
export const id="dl_e62d4a29d31047d98f39";
export const url=new URL("../icons/open-ai-logo-light.svg?v=cfa6dd181f8a9b5c13f2c0482447bb9d1f04731fc618ae431f5076472151e106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
