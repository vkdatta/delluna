export const name="lucid_3-refresh-cw";
export const id="dl_1c349bfc524944fa9234";
export const url=new URL("../icons/lucid_3-refresh-cw.svg?v=3cf6677cacc38c1f2a5e60f69fb8a729b9090f23e2f056a6bdaae2b1980d6abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
