export const name="history";
export const id="dl_c57381b89628f9384516";
export const url=new URL("../icons/history.svg?v=e16b110a5dd2fa26a197d30f05be18afef64a9a41a0719f08bd23d24f706780f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
