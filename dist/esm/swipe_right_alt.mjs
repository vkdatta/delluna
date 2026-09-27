export const name="swipe_right_alt";
export const id="dl_d22316f34c9e1ae7b9c2";
export const url=new URL("../icons/swipe_right_alt.svg?v=fef4b406e55b2817fc8cacc6b23610e32c5bf2ed5ec9f7d0e1da29965633d859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
