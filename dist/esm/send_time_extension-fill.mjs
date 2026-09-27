export const name="send_time_extension-fill";
export const id="dl_80b47714f6685fb37a78";
export const url=new URL("../icons/send_time_extension-fill.svg?v=ddafb56d1243a23220c49a91a0dcce4e69bea0c310ab8d7bccd5da5c738af0f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
