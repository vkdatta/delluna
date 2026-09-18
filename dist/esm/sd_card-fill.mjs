export const name="sd_card-fill";
export const id="dl_84d6c5096c164c3a9067";
export const url=new URL("../icons/sd_card-fill.svg?v=4731593d72617545c46bfdb41dfc5921be1e7c67579acb87936e7628a8cb60a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
