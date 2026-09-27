export const name="speaker-simple-slash-duotone";
export const id="dl_1e0a19d2245077d7a74b";
export const url=new URL("../icons/speaker-simple-slash-duotone.svg?v=b10f60280dcf04b665970fef4cfc65813bfcd4c6756ddb660e7f6dadd3144332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
