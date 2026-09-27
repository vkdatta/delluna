export const name="h_plus_mobiledata_badge";
export const id="dl_31ca3263eba9969a5f58";
export const url=new URL("../icons/h_plus_mobiledata_badge.svg?v=1bff72128b135bd0148728c7c4453446c7a57df8c38bd32c97b6eb7ba376ba8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
