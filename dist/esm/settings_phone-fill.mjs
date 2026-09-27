export const name="settings_phone-fill";
export const id="dl_14577389944865e6b2e9";
export const url=new URL("../icons/settings_phone-fill.svg?v=fe2f53c0d6b7fd2d74ce956a02fc92b930dd662ecc2f512a74af411589dca3ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
