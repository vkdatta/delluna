export const name="lastfm-logo-light";
export const id="dl_4a3955a7c5f24474bed7";
export const url=new URL("../icons/lastfm-logo-light.svg?v=70f5ef6f1b67407c0c3fa1bb4e144a95d378e823868caf7c5745d2d089029a5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
