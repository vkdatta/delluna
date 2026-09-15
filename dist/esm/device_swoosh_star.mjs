export const name="device_swoosh_star";
export const id="dl_9b509d93bc754b3bbccf";
export const url=new URL("../icons/D/device_swoosh_star.svg?v=5b3f76d67e3ab158ad4c62329151a23dac0770d55ef47919f98795ec2e547b92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
