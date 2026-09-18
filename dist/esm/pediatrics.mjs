export const name="pediatrics";
export const id="dl_8b67e2bf4b9f4062b31f";
export const url=new URL("../icons/P/pediatrics.svg?v=fb971d9e55a2545ba1003737ccd27bfb40491f29754bf353ece1d9ea15602988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
