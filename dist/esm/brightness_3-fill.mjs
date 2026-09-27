export const name="brightness_3-fill";
export const id="dl_5963abc3f143ec39cfb1";
export const url=new URL("../icons/brightness_3-fill.svg?v=a321d7e292080170dadd151c51539fa8d8697aff56bdaa5bd588e0c20bf7eddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
