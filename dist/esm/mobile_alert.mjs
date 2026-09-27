export const name="mobile_alert";
export const id="dl_73988e55933f4261d745";
export const url=new URL("../icons/mobile_alert.svg?v=b8d77901c7643663f437d55df1f0a88707f7a6cf428478f9c239b5a211a6f695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
