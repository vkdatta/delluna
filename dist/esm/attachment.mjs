export const name="attachment";
export const id="dl_2a8470882a2ddc519b9f";
export const url=new URL("../icons/attachment.svg?v=8eda1baf786524fdff553dea4c076b8a9af4217be11f4f6a06e0e0447d16996e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
