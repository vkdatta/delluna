export const name="volume_off-fill";
export const id="dl_9200d2cbc4624665a2f0";
export const url=new URL("../icons/volume_off-fill.svg?v=bba85f1079fd68b24e6a66feff123fae0dc823ee264320a3528e242317ff185f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
