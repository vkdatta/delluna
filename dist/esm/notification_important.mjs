export const name="notification_important";
export const id="dl_86cbe7f7b825cbc7a374";
export const url=new URL("../icons/notification_important.svg?v=91dbde10dc09891e571761e94a43e4ebae52ad37253a29f846503956e3867e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
