export const name="nest_wifi_point";
export const id="dl_6bab48664bad0d2ea833";
export const url=new URL("../icons/nest_wifi_point.svg?v=b37a54507f2a60d684f953966805560534e041130f87e903293e46267486918c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
