export const name="push-pin-simple-slash";
export const id="dl_041b195441c84852a6bb";
export const url=new URL("../icons/push-pin-simple-slash.svg?v=9a0781ae234819cb61866b8f308994f36e71886ff33af30e50ec523cec04bac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
