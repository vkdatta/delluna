export const name="settings_account_box";
export const id="dl_82d432f220d74ba9b1f7";
export const url=new URL("../icons/settings_account_box.svg?v=d454ac7e5560437d5b84d903fb78f61ccf07c35bb209f2016c96bb2d84cce8bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
