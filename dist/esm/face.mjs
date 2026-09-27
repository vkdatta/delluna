export const name="face";
export const id="dl_65401d17bd086a5f14bf";
export const url=new URL("../icons/face.svg?v=58635fbcf11c5497a80f2702a25b2111a030221ac025a65ecdbba729bea4122e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
