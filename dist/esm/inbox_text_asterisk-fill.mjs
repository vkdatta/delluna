export const name="inbox_text_asterisk-fill";
export const id="dl_d7337938e3f6d92cdd52";
export const url=new URL("../icons/inbox_text_asterisk-fill.svg?v=ee94a8ff0305fda840802e676c0a051c3f1207b8daba76b76c6934fd8b11c265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
