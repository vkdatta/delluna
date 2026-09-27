export const name="text-italic-bold";
export const id="dl_fd5f0dfd6c03af73c27d";
export const url=new URL("../icons/text-italic-bold.svg?v=1c4c90abfe594f9f7fce0060381919f58da8dddcb4baa4a52d77965cb864e557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
