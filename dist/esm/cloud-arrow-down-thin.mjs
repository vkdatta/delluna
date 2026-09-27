export const name="cloud-arrow-down-thin";
export const id="dl_9f15e54869b74079a21e";
export const url=new URL("../icons/cloud-arrow-down-thin.svg?v=63858d0c40eaec5510bd55691870deb7e56c66e1f809119091459b755b80f470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
