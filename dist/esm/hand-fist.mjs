export const name="hand-fist";
export const id="dl_134de256562945c0a8d9";
export const url=new URL("../icons/hand-fist.svg?v=b378180829120661f80fc2e807106c9fa0d62130c2e98138aa6e7b39cc3e5179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
