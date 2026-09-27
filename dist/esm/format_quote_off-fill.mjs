export const name="format_quote_off-fill";
export const id="dl_aca73be5a37c300b3977";
export const url=new URL("../icons/format_quote_off-fill.svg?v=9fff861aa7448acb6188b8410e46f0a31fd1393f289adeb05b99cbd7c20c4a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
