export const name="log-fill";
export const id="dl_3178847851fb4147abe3";
export const url=new URL("../icons/log-fill.svg?v=3632059c4a59c90c06355f43815f2232a068c62b09582c831f24891dc8992bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
