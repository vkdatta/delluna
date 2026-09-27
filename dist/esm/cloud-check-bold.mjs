export const name="cloud-check-bold";
export const id="dl_bb7d2f5d397a4357a5a3";
export const url=new URL("../icons/cloud-check-bold.svg?v=c7841aa349bd6389f14e69b9def0fe4f33dbf15b9544ca475a3f1f6daabbd63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
