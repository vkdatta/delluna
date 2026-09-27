export const name="truck-thin";
export const id="dl_62c931392d65d604f903";
export const url=new URL("../icons/truck-thin.svg?v=74bd70efa9007c02d0fd8482a87fb9452f05ff31ec40dc2f616381ef8f1e8894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
