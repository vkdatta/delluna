export const name="notifications_unread";
export const id="dl_28b25cd0ed33bc8995ec";
export const url=new URL("../icons/notifications_unread.svg?v=ea08b1d337e7d9d5e93a1b95109919cc68dd983815d7c25ab943e9c1f16da7e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
