export const name="lastfm-logo-light";
export const id="dl_4a3955a7c5f24474bed7";
export const url=new URL("../icons/lastfm-logo-light.svg?v=19276f1cbdcfc802a77b2bab3e41fafef42773e6d2a644c77d61e6f2514dc4f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
