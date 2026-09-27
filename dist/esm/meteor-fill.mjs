export const name="meteor-fill";
export const id="dl_3a78509b9ae349ef89de";
export const url=new URL("../icons/meteor-fill.svg?v=2019ce15a367c32c073fdfea2b67bf56ee30c3a442c067bee1507a8cba39aa20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
