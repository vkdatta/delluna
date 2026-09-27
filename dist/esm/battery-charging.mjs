export const name="battery-charging";
export const id="dl_67a9e0c8093042c0a9ef";
export const url=new URL("../icons/battery-charging.svg?v=eb56abd1d58b1b9e72fdca0cea72a7035bede4f3f2c3597e76436c2ab8393012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
