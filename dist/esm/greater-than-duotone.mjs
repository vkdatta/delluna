export const name="greater-than-duotone";
export const id="dl_56ab0670ba5f40ebb32f";
export const url=new URL("../icons/greater-than-duotone.svg?v=c0d95e98ec40488ce6d293736ef1655d2449302cd96e2e0c4106e8d563188efe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
