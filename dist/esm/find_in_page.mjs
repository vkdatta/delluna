export const name="find_in_page";
export const id="dl_d50ab440525402d2e18c";
export const url=new URL("../icons/find_in_page.svg?v=3e6c74e968660cfd84bcc342d1f0175bf7801f4af01fc2fb072bbcf77a7a6a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
