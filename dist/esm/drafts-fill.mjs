export const name="drafts-fill";
export const id="dl_f534caa403d9feb46083";
export const url=new URL("../icons/drafts-fill.svg?v=bc9d39dc967f39b08bf04a4a40add305d833d8dc0e709b1b8ba96e2432014af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
