export const name="spoke";
export const id="dl_2cc29fd5bf7395e27731";
export const url=new URL("../icons/spoke.svg?v=38e71e4ad0486c13bd14493334f157eb14b0752528d4d385c1e98980d83bc82c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
