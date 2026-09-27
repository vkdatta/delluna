export const name="skip-forward-bold";
export const id="dl_14a3e62aeecd994f2195";
export const url=new URL("../icons/skip-forward-bold.svg?v=cd3683e8d33db885fb6d288c476ce49390ccdcac8f3df190f217c634b6378c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
