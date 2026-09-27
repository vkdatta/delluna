export const name="tab_recent";
export const id="dl_9a264e801bf9be99ebc6";
export const url=new URL("../icons/tab_recent.svg?v=1d38119d7e4b667b987d132b96e6e3130826a789e638e1583a6641b4df145fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
