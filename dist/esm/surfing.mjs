export const name="surfing";
export const id="dl_f9313d87a0475fbaa062";
export const url=new URL("../icons/surfing.svg?v=04b118c807dad48ca8165e6df47b789edb63b8068288067e919a79b3d1915d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
