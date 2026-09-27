export const name="hearing_aid_left";
export const id="dl_0f8fca28c7acd280edc6";
export const url=new URL("../icons/hearing_aid_left.svg?v=9facf76db7206cc30e4db18f1b5fe4fe7b5598f3268a9339fee7597179e787b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
