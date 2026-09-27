export const name="file-tsx-bold";
export const id="dl_4178ec6f411b4c5f8c31";
export const url=new URL("../icons/file-tsx-bold.svg?v=8124a271d6d27a20d55bef48a6c3ac67bca44ff93b606e4c69018f4f76ec1ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
