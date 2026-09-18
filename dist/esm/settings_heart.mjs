export const name="settings_heart";
export const id="dl_4a6fd78ba9394510849d";
export const url=new URL("../icons/settings_heart.svg?v=ca917dd1d6c93b9d5abe6aa249c71debf4ebc1da3faa81eae3cc7eac45ecf0b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
