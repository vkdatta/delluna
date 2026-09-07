export const name="phone-transfer";
export const id="dl_85a7f2f878d34e2f8bfc";
export const url=new URL("../icons/phone-transfer.svg?v=2efcf73d7a25473e2fc8e79ba005276eb52a1308b740db26628ea96103c69e15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
