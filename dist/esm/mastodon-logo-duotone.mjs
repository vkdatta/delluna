export const name="mastodon-logo-duotone";
export const id="dl_c26fbd648b094cc8aa8b";
export const url=new URL("../icons/mastodon-logo-duotone.svg?v=ba5390b8613c7e5f0b254636c98c189be918e2b51c8b9c199361f96781d0d375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
