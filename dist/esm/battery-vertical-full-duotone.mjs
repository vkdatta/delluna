export const name="battery-vertical-full-duotone";
export const id="dl_0f9ce76c4c244065a082";
export const url=new URL("../icons/battery-vertical-full-duotone.svg?v=8e98b35173704ae7be8cc1ce8c683f28932a458a8bd82bb9f7f213bdfabc86fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
