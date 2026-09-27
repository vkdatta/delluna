export const name="auto_towing";
export const id="dl_695da55aba7ca191fe4b";
export const url=new URL("../icons/auto_towing.svg?v=69b0603de95fcf7caea6021a228e9c179115ebba750677c9723eecb2ddeffc52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
