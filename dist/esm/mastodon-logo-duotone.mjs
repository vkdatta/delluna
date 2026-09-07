export const name="mastodon-logo-duotone";
export const id="dl_c26fbd648b094cc8aa8b";
export const url=new URL("../icons/mastodon-logo-duotone.svg?v=b20974588b1de25423e4eac813ad3f9a0bd3a755494b5d0057eb5c76071aaa2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
