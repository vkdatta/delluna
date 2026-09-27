export const name="lightning-duotone";
export const id="dl_0fed22bc5e5a489381e6";
export const url=new URL("../icons/lightning-duotone.svg?v=c3528b37e9465997cde15702b1477715016e644dbcd2c0cc24e1bc868b4a7d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
