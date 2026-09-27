export const name="lucid_1-battery-full";
export const id="dl_5ccd9ae0a467453cba38";
export const url=new URL("../icons/lucid_1-battery-full.svg?v=e61c267993fcab849ec2a3a26a1bd5cd28cd434846138af5c476b47edb38f8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
