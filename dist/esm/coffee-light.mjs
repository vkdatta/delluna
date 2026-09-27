export const name="coffee-light";
export const id="dl_9e013231c05941ba9a07";
export const url=new URL("../icons/coffee-light.svg?v=5cc81da9390669c2731bf17c7a5f2b07151bb5a9e147c812843ae6bc4c19a1ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
