export const name="nest_wifi_pro_2-fill";
export const id="dl_98e36636bafb01468d05";
export const url=new URL("../icons/nest_wifi_pro_2-fill.svg?v=6268c6d537dbe616afcada05acce7ded49b62642fef85302505e0d79624952d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
