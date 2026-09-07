export const name="phone-incoming-duotone";
export const id="dl_9f6221f820864b188ee0";
export const url=new URL("../icons/phone-incoming-duotone.svg?v=d943bd20ef4722c5f3e685299783046bdc317ee46ad90cda983515772901fb24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
