export const name="work_history";
export const id="dl_dadbbc394b848b15792f";
export const url=new URL("../icons/work_history.svg?v=1c71e1bafb09bb583f98d5e0f471c8d357c3372a6eb8b2f6fafe1144bead8f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
