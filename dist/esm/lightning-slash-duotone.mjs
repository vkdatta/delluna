export const name="lightning-slash-duotone";
export const id="dl_117ccd9b48a94b0787e8";
export const url=new URL("../icons/lightning-slash-duotone.svg?v=d0e7d9dc044d90cc9f9c5050f03427a148e73b91efee708d049297a56e539df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
