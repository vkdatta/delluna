export const name="lightning-slash-duotone";
export const id="dl_117ccd9b48a94b0787e8";
export const url=new URL("../icons/lightning-slash-duotone.svg?v=f018814f1fc73a50ea04ae6758b649e79b8f59dad4d02e1291b2d1808f7aaede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
