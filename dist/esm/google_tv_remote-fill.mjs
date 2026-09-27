export const name="google_tv_remote-fill";
export const id="dl_3b439782aa78d507dcb3";
export const url=new URL("../icons/google_tv_remote-fill.svg?v=24f5bb7b40742b536d16fb7b5a511e2f91ae67ba54e8fb7a4a71ab80a6faa659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
