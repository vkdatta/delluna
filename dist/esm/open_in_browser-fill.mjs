export const name="open_in_browser-fill";
export const id="dl_f84011328c41a253374b";
export const url=new URL("../icons/open_in_browser-fill.svg?v=0288356ee485f4f2c11812e7ee4090a51b5d483131e89dfc8277195517c3a852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
