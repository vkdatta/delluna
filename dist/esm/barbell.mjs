export const name="barbell";
export const id="dl_b6f6242bb8624cfb97d1";
export const url=new URL("../icons/barbell.svg?v=aa6a110ee41aaf632bc12fbcd2579a33e7ab8c86958beb14d72ab420febe49ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
