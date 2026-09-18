export const name="inbox_customize";
export const id="dl_4a62929a8f7a4222b62c";
export const url=new URL("../icons/inbox_customize.svg?v=22a19b11bf833d81dd3c2a2b917f579bb64a4e7d687277a7d382577299a0f61d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
