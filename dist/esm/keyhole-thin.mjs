export const name="keyhole-thin";
export const id="dl_800304f865084323bf95";
export const url=new URL("../icons/keyhole-thin.svg?v=c7f342c66ba6df1fdf3ffd261c000b11f0a6fc0a3878e9c79b33e716210d53b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
