export const name="grid-four-light";
export const id="dl_2f6e723d9096475a8800";
export const url=new URL("../icons/grid-four-light.svg?v=c236024372bd9ed3115a4b29b84ce869a1f48aa888b1d3e64d6bc6d95211f31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
