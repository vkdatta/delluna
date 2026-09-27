export const name="notification-bold";
export const id="dl_bbcbc790b7c44c7ba15f";
export const url=new URL("../icons/notification-bold.svg?v=e60880a627c4d49224b0567ed5574e0fe6f97d35ffac1494ef421885481e229c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
