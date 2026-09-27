export const name="business_messages-fill";
export const id="dl_a4c7c106167eb454d1b8";
export const url=new URL("../icons/business_messages-fill.svg?v=9375633e8542ea531ec3f46a512c0dd03e673c0d3e271c4991ca6f52520413bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
