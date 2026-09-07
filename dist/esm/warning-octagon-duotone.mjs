export const name="warning-octagon-duotone";
export const id="dl_3bcfb6230f5c42a187f0";
export const url=new URL("../icons/W/warning-octagon-duotone.svg?v=9aed829d81dc39752c5c40f379385ad436f87727901d9785df8d6b2aee8d763c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
