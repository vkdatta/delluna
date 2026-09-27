export const name="speaker-simple-x-duotone";
export const id="dl_5197465974d02ebd9cf6";
export const url=new URL("../icons/speaker-simple-x-duotone.svg?v=1f2b1621971c1549dadeedbb8196d4670ed73b22f6d2872f52d001b95dc1ca01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
