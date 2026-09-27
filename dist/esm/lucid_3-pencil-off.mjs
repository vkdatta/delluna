export const name="lucid_3-pencil-off";
export const id="dl_030ef307d1694b44a497";
export const url=new URL("../icons/lucid_3-pencil-off.svg?v=e7c7f4d8dde91a6e7ea31bf583d2c009d499eccf98172cd552645b1e9e457897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
