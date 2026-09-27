export const name="gavel-thin";
export const id="dl_bbaf0f7f020a458db565";
export const url=new URL("../icons/gavel-thin.svg?v=cd8b6c8b31e796eb961660e4ec2011596b2b1fcd6b854efb3fa352708cd3e532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
