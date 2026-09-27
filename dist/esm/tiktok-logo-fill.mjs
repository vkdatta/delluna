export const name="tiktok-logo-fill";
export const id="dl_bbf7548ddbf59d43a84f";
export const url=new URL("../icons/tiktok-logo-fill.svg?v=e32782281ea2bb4053b785efb39192e1383cfd42597c920cd845973d55c86b44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
