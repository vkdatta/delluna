export const name="qr_code_scanner-fill";
export const id="dl_62299fb94613784e382e";
export const url=new URL("../icons/qr_code_scanner-fill.svg?v=547084e62f8e2d38e11d35ad0620940cdeac17f4915611aab0bfa7f911469516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
