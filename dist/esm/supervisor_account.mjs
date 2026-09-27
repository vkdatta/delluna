export const name="supervisor_account";
export const id="dl_af6c7db4a38cf6000086";
export const url=new URL("../icons/supervisor_account.svg?v=09efcce623551c9df540658dd3b69779f0296e2b90e61c66351b7017a7be52fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
