export const name="phone-incoming-duotone";
export const id="dl_9f6221f820864b188ee0";
export const url=new URL("../icons/phone-incoming-duotone.svg?v=ab6c2147845a62372ce60b3fa65e912a594c3b2fb5fe9a6861afd0b8d4585d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
