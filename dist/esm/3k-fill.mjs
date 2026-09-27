export const name="3k-fill";
export const id="dl_a2ab41a1b5545f036d7f";
export const url=new URL("../icons/3k-fill.svg?v=ddba21c96131735d49e7179afcfc69cb6ee29ee76887f2de355b00e61d307839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
