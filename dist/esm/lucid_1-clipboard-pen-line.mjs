export const name="lucid_1-clipboard-pen-line";
export const id="dl_e305fde343c8461dae08";
export const url=new URL("../icons/lucid_1-clipboard-pen-line.svg?v=b9571e2710a5706e5f130a6e287002a37627990a5c608481e360ffe3b2e649b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
