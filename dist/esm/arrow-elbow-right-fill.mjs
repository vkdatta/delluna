export const name="arrow-elbow-right-fill";
export const id="dl_ad5ba154db9149968291";
export const url=new URL("../icons/arrow-elbow-right-fill.svg?v=2e390c304cc12d639c8987f22e3a3cd3225bf71a50a960b4316e511d06071bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
