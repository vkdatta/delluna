export const name="sentiment_sad";
export const id="dl_ace96825ec05d4794415";
export const url=new URL("../icons/sentiment_sad.svg?v=37c9c8703fdfc87dad827d426d040f68ddcc51dec5f0099982935614ffa7d947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
