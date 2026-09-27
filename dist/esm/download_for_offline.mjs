export const name="download_for_offline";
export const id="dl_ff953b84708f9515207f";
export const url=new URL("../icons/download_for_offline.svg?v=c43609360047deea9fbba309bf1c9b59a96fbbf6809cfc85156046a4c838b7c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
