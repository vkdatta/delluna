export const name="swipe_vertical";
export const id="dl_c862cb77d238ed4bcc7d";
export const url=new URL("../icons/swipe_vertical.svg?v=e41b27227e5c49ae6f54a5b9baf8d982a4721c63ffff0972016bd5f0a6a42c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
