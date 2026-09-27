export const name="dehaze-fill";
export const id="dl_0b0c100130f6b356cdce";
export const url=new URL("../icons/dehaze-fill.svg?v=53d4854add0dafe17315f1acec9a72e0dc3eac8a85a47d273cab64a31a9c6b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
