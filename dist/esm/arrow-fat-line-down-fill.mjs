export const name="arrow-fat-line-down-fill";
export const id="dl_e29b51564bbd449ba2ac";
export const url=new URL("../icons/arrow-fat-line-down-fill.svg?v=41c5c9402cd51b551ba83f523f7f96fe26dae22044d917a2af55384f1778c7a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
