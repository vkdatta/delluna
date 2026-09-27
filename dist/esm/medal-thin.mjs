export const name="medal-thin";
export const id="dl_d2269b3bc50045009be6";
export const url=new URL("../icons/medal-thin.svg?v=7411c7706b7583f93f353f5fa07cbb467c528184a5395899a5f8a0d53c2016e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
