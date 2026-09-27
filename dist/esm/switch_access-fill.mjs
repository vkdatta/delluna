export const name="switch_access-fill";
export const id="dl_cb7d79c51ce227395d1c";
export const url=new URL("../icons/switch_access-fill.svg?v=a173e8f31a029a99ce42d84365eff5b450a79f93c6dd030a3984b5cf6c1b6978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
