export const name="inbox_text_asterisk";
export const id="dl_cbd3950e3e94ce876ed2";
export const url=new URL("../icons/inbox_text_asterisk.svg?v=7c0fdb0e114ded0bda234a5fa9796230e94e1d89a355bfdba8c5c2cd1d5076b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
