export const name="shuffle-simple";
export const id="dl_45bd7c7ac3ae4c0685a6";
export const url=new URL("../icons/S/shuffle-simple.svg?v=713eb4e331b20b47f4d363a40f0f8af1cd5707a659675b4ded946976c713fba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
