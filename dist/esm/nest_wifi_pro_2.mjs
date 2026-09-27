export const name="nest_wifi_pro_2";
export const id="dl_45ddb4c5651c78e934b4";
export const url=new URL("../icons/nest_wifi_pro_2.svg?v=6355cf0c28293eb879e7e39f4e26e52bfff6cc713b42d6dc811bef14e721ec84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
