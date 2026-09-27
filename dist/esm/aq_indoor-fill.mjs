export const name="aq_indoor-fill";
export const id="dl_cae77f942e64550f21d9";
export const url=new URL("../icons/aq_indoor-fill.svg?v=dc3215dab4de5a0b863e28c1a302c469b28c2ec908903b7fad6a10de3f4c9ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
