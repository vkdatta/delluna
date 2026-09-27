export const name="computer-tower-duotone";
export const id="dl_57e603c080b34920be78";
export const url=new URL("../icons/computer-tower-duotone.svg?v=bba1cc7912393357d6e623dcf0936fc6e78ccfdc2cb07c5dd242648dd291cae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
