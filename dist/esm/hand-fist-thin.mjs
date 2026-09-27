export const name="hand-fist-thin";
export const id="dl_4e8969c5dca344e7b456";
export const url=new URL("../icons/hand-fist-thin.svg?v=73cb95bfbebdac4e6d6381e9413007bd51d6e5f32b5bf0d25e5ea86ce242feda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
