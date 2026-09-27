export const name="cloud-snow-thin";
export const id="dl_54c0b06faa014c738030";
export const url=new URL("../icons/cloud-snow-thin.svg?v=a7a2feacaa422489749719d18f89192f473221a6864bef957b783cf1c0f2481e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
