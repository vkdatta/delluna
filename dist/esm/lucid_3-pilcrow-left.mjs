export const name="lucid_3-pilcrow-left";
export const id="dl_997cb987f98b4f45b2bf";
export const url=new URL("../icons/lucid_3-pilcrow-left.svg?v=510300114b5f4b76864a7297b523e4dbb68ce6b4489f63284839bccfcb27864c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
