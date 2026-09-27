export const name="pan_zoom-fill";
export const id="dl_29cc106c5114d4ab9ae1";
export const url=new URL("../icons/pan_zoom-fill.svg?v=f11c31ecbb4e82c8eb83b524c8021a56c795070ddb6c441aa09728c91a73e239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
