export const name="arrows-out-simple-duotone";
export const id="dl_882179cb25d84332b111";
export const url=new URL("../icons/arrows-out-simple-duotone.svg?v=f12f7ad078f37f30a27c3112d3962b75878fef8c665f807192c1ec7544d128db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
