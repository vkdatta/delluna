export const name="settings_account_box";
export const id="dl_36639d2c4cc484575976";
export const url=new URL("../icons/settings_account_box.svg?v=678c87e3e16d29448872f496a44c765eef41ae0ed761b79a9bf81b9c8a39d31d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
