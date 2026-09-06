export const name="link-break-duotone";
export const id="dl_7f1e61c5a2f14a0aaf97";
export const url=new URL("../icons/link-break-duotone.svg?v=9bfd68442f6a556bdaad842903f563ca63f12d00bd5c36f78b1e47d6faa479d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
